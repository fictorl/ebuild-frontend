import { useState, useMemo } from 'react';
import {
  getPedidos,
  getProdutos,
  createProduto,
  deleteProduto,
  getCategorias,
  createCategoria,
} from '@/app/hooks/useLojistaData';
import {jwtDecode } from 'jwt-decode';

export function usePainelLojistaHandlers() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');
  const [pedidos, setPedidos] = useState<any[] | null>(null);
  const [form, setForm] = useState({ nome: '', descricao: '', preco: '', categoriaProdutoId: '' });
  const [loading, setLoading] = useState(false);
  const [cnpj, setCnpj] = useState<string>('');
  const [categoriasObj, setCategoriasObj] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showCategoriaForm, setShowCategoriaForm] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState('');
  const [view, setView] = useState<'estoque' | 'pedidos' | null>(null);

  const produtosFiltrados = useMemo(
    () =>
      categoriaSelecionada
        ? produtos.filter((p) => p.categoriaProduto?.nome === categoriaSelecionada)
        : produtos,
    [produtos, categoriaSelecionada]
  );

  const handleVerPedidos = async (token: string) => {
    let lojaCnpj = cnpj;
    if (!lojaCnpj) {
      const produtosResult = await getProdutos(token);
      lojaCnpj = produtosResult[0]?.lojaCnpj || '';
      setCnpj(lojaCnpj);
      if (!lojaCnpj) return;
    }
    const pedidosResult = await getPedidos(token, lojaCnpj);
    console.log('pedidosResult', pedidosResult);
    setPedidos(pedidosResult?.pedidos || pedidosResult || []);
    setView('pedidos');
    return pedidosResult;
  };

  const handleVerEstoque = async (token: string) => {
    const decodedToken: any = jwtDecode(token);
    const cnpjLoja = decodedToken?.cnpj;

    if (!cnpjLoja) {
      console.error('CNPJ não encontrado no token.');
      return;
    }

    const produtosResult = await getProdutos(token);
    const produtosFiltrados = produtosResult.filter((produto: any) => produto.lojaCnpj === cnpjLoja);

    const categoriasUnicas = Array.from(
      new Set(produtosFiltrados.map((p: any) => p.categoriaProduto?.nome).filter(Boolean))
    );

    setProdutos(produtosFiltrados || []);
    setCategorias(categoriasUnicas as string[]);
    setCategoriaSelecionada('');
    setView('estoque');
  };

  const handleCreateProduto = async (e: React.FormEvent, token: string, after?: () => void) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createProduto(token, {
        nome: form.nome,
        descricao: form.descricao,
        preco: Number(form.preco),
        categoriaProdutoId: Number(form.categoriaProdutoId),
      });
      setShowForm(false);
      setForm({ nome: '', descricao: '', preco: '', categoriaProdutoId: '' });
      after && after();
    } catch {
      alert('Erro ao criar produto');
    }
    setLoading(false);
  };

  const handleDeleteProduto = async (id: number, token: string, after?: () => void) => {
    if (!window.confirm('Tem certeza que deseja deletar este produto?')) return;
    setLoading(true);
    try {
      await deleteProduto(token, id);
      after && after();
    } catch {
      alert('Erro ao deletar produto');
    }
    setLoading(false);
  };

  const handleAbrirFormProduto = async (token: string) => {
    const produtosResult = await getProdutos(token);
    const cnpjLoja = produtosResult[0]?.lojaCnpj || '';
    setCnpj(cnpjLoja);
    if (cnpjLoja) {
      const categoriasResult = await getCategorias(token, cnpjLoja);
      setCategoriasObj(categoriasResult || []);
    }
    setShowForm(true);
  };

  const handleCriarCategoria = async (e: React.FormEvent, token: string) => {
    e.preventDefault();
    console.log('Criando nova categoria:', novaCategoria);

    if (!novaCategoria.trim()) return;
    await createCategoria(token, novaCategoria.trim());
    if (cnpj) {
      const categoriasResult = await getCategorias(token, cnpj);
      console.log('Categorias atualizadas:', categoriasResult);
      setCategoriasObj(categoriasResult || []);
      setCategorias(categoriasResult.map((cat: any) => cat.nome));
    }
    setNovaCategoria('');
    setShowCategoriaForm(false);
  };

  return {
    produtos,
    setProdutos,
    categorias,
    setCategorias,
    categoriaSelecionada,
    setCategoriaSelecionada,
    pedidos,
    setPedidos,
    form,
    setForm,
    loading,
    setLoading,
    cnpj,
    setCnpj,
    categoriasObj,
    setCategoriasObj,
    showForm,
    setShowForm,
    showCategoriaForm,
    setShowCategoriaForm,
    novaCategoria,
    setNovaCategoria,
    view,
    setView,
    produtosFiltrados,
    handleVerPedidos,
    handleVerEstoque,
    handleCreateProduto,
    handleDeleteProduto,
    handleAbrirFormProduto,
    handleCriarCategoria,
  };
}