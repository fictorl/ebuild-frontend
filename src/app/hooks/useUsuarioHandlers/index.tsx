'use client'
import { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { jwtDecode } from 'jwt-decode'

export function useUsuarioHandlers() {
  const [produtos, setProdutos] = useState<any[]>([])
  const [token, setToken] = useState<string | null>(null)
  const [filtroLoja, setFiltroLoja] = useState('')
  const [filtroPreco, setFiltroPreco] = useState<number | null>(null)
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([])
  const [carrinho, setCarrinho] = useState<{ produtoId: number; quantidade: number; lojaCnpj: string }[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('token_usuario')
    if (stored) setToken(stored)
  }, [])

  const carregarProdutos = async () => {
    const res = await axios.get('http://localhost:3000/produtos')
    setProdutos(res.data)
  }

  const toggleCategoria = (categoria: string) => {
    setCategoriasSelecionadas(prev =>
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    )
  }

  const produtosFiltrados = useMemo(() => {
    return produtos.filter(p => {
      const lojaOk = filtroLoja ? p.loja.nome === filtroLoja : true
      const precoOk = filtroPreco ? p.preco <= filtroPreco : true
      const categoriaOk =
        categoriasSelecionadas.length > 0
          ? categoriasSelecionadas.includes(p.categoriaProduto?.nome)
          : true
      return lojaOk && precoOk && categoriaOk
    })
  }, [produtos, filtroLoja, filtroPreco, categoriasSelecionadas])

  const adicionarAoCarrinho = (produtoId: number, lojaCnpj: string) => {
    setCarrinho(prev => {
      const existente = prev.find(i => i.produtoId === produtoId)
      if (existente) {
        return prev.map(i =>
          i.produtoId === produtoId ? { ...i, quantidade: i.quantidade + 1 } : i
        )
      }
      return [...prev, { produtoId, quantidade: 1, lojaCnpj }]
    })
    toast.success('Produto adicionado ao carrinho')
  }

  const removerDoCarrinho = (produtoId: number) => {
    setCarrinho(prev => prev.filter(p => p.produtoId !== produtoId))
  }

  const fazerPedido = async () => {
    if (!token) return toast.error('Usuário não autenticado.')
    if (carrinho.length === 0) return toast.error('Carrinho vazio.')

    const lojaCnpj = carrinho[0].lojaCnpj
    const lojasDiferentes = carrinho.some(i => i.lojaCnpj !== lojaCnpj)
    if (lojasDiferentes) return toast.error('Adicione produtos de uma única loja por pedido.')

    const itens = carrinho.map(({ produtoId, quantidade }) => ({ produtoId, quantidade }))

    try {
      await axios.post(
        'http://localhost:3000/pedidos',
        { lojaCnpj, itens },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      toast.success('Pedido realizado com sucesso.')
      setCarrinho([])
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Erro ao fazer pedido.')
    }
  }

  return {
    produtosFiltrados,
    filtroLoja, setFiltroLoja,
    filtroPreco, setFiltroPreco,
    categoriasSelecionadas, toggleCategoria,
    adicionarAoCarrinho,
    removerDoCarrinho,
    fazerPedido,
    carrinho,
    carregarProdutos,
    token,
    produtos
  }
}
