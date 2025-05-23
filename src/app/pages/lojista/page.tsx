'use client'

import { useEffect, useState } from 'react'
import { Container, Header, Title, Logo, ButtonRow, StyledButton, StyledSelect, TableWrapper, StyledTable } from './styles'
import { ProdutoForm } from '@/app/components/FormProduct'
import { CategoriaForm } from '@/app/components/FormCategory'
import { usePainelLojistaHandlers } from '@/app/hooks/useLojistaHandlers'
import { FaClipboardList, FaBoxes, FaPlus, FaTimes } from 'react-icons/fa'
import { PedidoCard } from '@/app/components/PedidoCard'


export default function PainelLojista() {
  const [token, setToken] = useState<string | null>(null)
  const handlers = usePainelLojistaHandlers()

  useEffect(() => {
    const saved = localStorage.getItem('token_lojista')
    if (saved) setToken(saved)
  }, [])

  if (!token) {
    return (
      <Container>
        <Header>
          <Title>eBuild <Logo src="/ebuild.png" alt="logo" /></Title>
        </Header>
        <p style={{ marginTop: '2rem' }}>Você não está logado como lojista.</p>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Logo src="/ebuild.png" alt="logo" />
      </Header>

      <ButtonRow>
        <StyledButton onClick={() => handlers.handleVerPedidos(token)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FaClipboardList />
          Ver Pedidos
        </StyledButton>
        <StyledButton onClick={() => handlers.handleVerEstoque(token)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FaBoxes />
          Ver Estoque
        </StyledButton>
        <StyledButton onClick={() => handlers.handleAbrirFormProduto(token)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FaPlus />
          Criar Produto
        </StyledButton>
      </ButtonRow>

      {handlers.showForm && (
        <TableWrapper>
          <ProdutoForm
            form={handlers.form}
            setForm={handlers.setForm}
            categoriasObj={handlers.categoriasObj}
            loading={handlers.loading}
            onSubmit={e => handlers.handleCreateProduto(e, token, () => handlers.handleVerEstoque(token))}
            onCancel={() => handlers.setShowForm(false)}
            onNovaCategoria={() => {
              console.log('Abrindo formulário de nova categoria');
              handlers.setShowCategoriaForm(true);
            }}
          />
          {handlers.showCategoriaForm && (
            <CategoriaForm
              novaCategoria={handlers.novaCategoria}
              setNovaCategoria={handlers.setNovaCategoria}
              onSubmit={e => handlers.handleCriarCategoria(e, token)}
              onCancel={() => handlers.setShowCategoriaForm(false)}
            />
          )}
        </TableWrapper>
      )}

      {handlers.view === 'estoque' && (
        <>
          {handlers.categorias.length > 0 && (
            <div style={{ margin: '16px 0' }}>
              <label>Filtrar por categoria: </label>
              <StyledSelect
                value={handlers.categoriaSelecionada}
                onChange={e => handlers.setCategoriaSelecionada(e.target.value)}
              >
                <option value="">Todas</option>
                {handlers.categorias.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </StyledSelect>
            </div>
          )}

          <TableWrapper>
            {handlers.produtosFiltrados?.length === 0
              ? 'Nenhum produto encontrado.'
              : (
                <StyledTable>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Preço</th>
                      <th>Categoria</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {handlers.produtosFiltrados.map((produto) => (
                      <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.descricao}</td>
                        <td>R$ {produto.preco.toFixed(2)}</td>
                        <td>{produto.categoriaProduto?.nome}</td>
                        <td>
                          <StyledButton
                            style={{ background: '#ff5252', color: '#fff', padding: '0.5rem 1rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 6 }}
                            onClick={() => handlers.handleDeleteProduto(produto.id, token, () => handlers.handleVerEstoque(token))}
                            disabled={handlers.loading}
                          >
                            <FaTimes />
                            Deletar
                          </StyledButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              )
            }
          </TableWrapper>
        </>
      )}

      {handlers.view === 'pedidos' && (
        <TableWrapper>
          {handlers.pedidos && handlers.pedidos.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {handlers.pedidos.map((pedido: any) => (
                <PedidoCard key={pedido.id} pedido={pedido} />
              ))}
            </div>
          ) : (
            'Nenhum pedido encontrado.'
          )}
        </TableWrapper>
      )}

      {!handlers.view && (
        <TableWrapper>
          Escolha uma opção para visualizar os dados da loja.
        </TableWrapper>
      )}
    </Container>
  )
}