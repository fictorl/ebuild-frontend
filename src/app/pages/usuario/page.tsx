'use client'

import { useEffect, useState } from 'react'
import {
  PageContainer,
  Sidebar,
  FiltersHeader,
  FilterSection,
  Content,
  CartButton,
  CartIconWrapper
} from './styles'
import { FiFilter, FiShoppingCart } from 'react-icons/fi'
import { useUsuarioHandlers } from '@/app/hooks/useUsuarioHandlers'
import UserProductCard from '@/app/components/UserProductCard'
import CartModal from '@/app/components/CartModal'

export default function PainelUsuario() {
  const {
    produtos,
    produtosFiltrados,
    filtroLoja, setFiltroLoja,
    filtroPreco, setFiltroPreco,
    categoriasSelecionadas, toggleCategoria,
    adicionarAoCarrinho,
    removerDoCarrinho,
    fazerPedido,
    carrinho,
    carregarProdutos,
    token
  } = useUsuarioHandlers()

  const [openCart, setOpenCart] = useState(false)

  useEffect(() => { carregarProdutos() }, [])

  if (!token) return <p>Faça login como usuário.</p>

  const lojasUnicas = [...new Set(produtos.map(p => p.loja.nome))]
  const categoriasUnicas = [...new Set(
    produtos.map(p => p.categoriaProduto?.nome).filter(Boolean)
  )]

  return (
    <PageContainer>
      <Sidebar>
        <FiltersHeader><FiFilter /> Filtros</FiltersHeader>

        <FilterSection>
          <label>Loja</label>
          <select value={filtroLoja} onChange={e => setFiltroLoja(e.target.value)}>
            <option value="">Todas</option>
            {lojasUnicas.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </FilterSection>

        <FilterSection>
          <label>Preço Máx.</label>
          <input
            type="number"
            value={filtroPreco ?? ''}
            onChange={e => setFiltroPreco(
              e.target.value ? Number(e.target.value) : null
            )}
          />
        </FilterSection>

        <FilterSection>
          <label>Categorias</label>
          {categoriasUnicas.map(n => (
            <div key={n}>
              <input
                type="checkbox"
                checked={categoriasSelecionadas.includes(n)}
                onChange={() => toggleCategoria(n)}
              />
              <span>{n}</span>
            </div>
          ))}
        </FilterSection>

        <CartIconWrapper>
          <CartButton onClick={() => setOpenCart(true)}>
            <FiShoppingCart /> Ver Carrinho ({carrinho.length})
          </CartButton>
        </CartIconWrapper>

        <CartIconWrapper>
          <CartButton onClick={() => {
            localStorage.removeItem('token_usuario')
            window.location.href = '/'
          }}>
            Sair
          </CartButton>
        </CartIconWrapper>
      </Sidebar>

      <Content>
        {produtosFiltrados.map(p => (
          <UserProductCard
            key={p.id}
            id={p.id}
            nome={p.nome}
            descricao={p.descricao}
            preco={p.preco}
            loja={p.loja}
            onOrder={() => adicionarAoCarrinho(p.id, p.loja.cnpj)}
          />
        ))}
      </Content>

      <CartModal
        open={openCart}
        onClose={() => setOpenCart(false)}
        carrinho={carrinho}
        produtos={produtos}
        onRemove={removerDoCarrinho}
        onCheckout={fazerPedido}
      />
    </PageContainer>
  )
}
