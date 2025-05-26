'use client'
import { FC } from 'react'
import {
  Backdrop, Drawer, Header, CloseBtn,
  ItemList, Item, ItemInfo, RemoveBtn, CheckoutBtn
} from './styles'
import { FiX, FiTrash2 } from 'react-icons/fi'

interface Produto {
  id: number
  nome: string
}

interface CartItem {
  produtoId: number
  quantidade: number
  lojaCnpj: string
}

interface CartModalProps {
  open: boolean
  onClose: () => void
  carrinho: CartItem[]
  produtos: Produto[]
  onRemove: (produtoId: number) => void
  onCheckout: () => void
}

const CartModal: FC<CartModalProps> = ({
  open, onClose, carrinho, produtos, onRemove, onCheckout
}) => {
  if (!open) return null

  return (
    <Backdrop onClick={onClose}>
      <Drawer onClick={e => e.stopPropagation()}>
        <Header>
          <h3>Carrinho</h3>
          <CloseBtn onClick={onClose}><FiX /></CloseBtn>
        </Header>
        <ItemList>
          {carrinho.map(i => {
            const p = produtos.find(x => x.id === i.produtoId)
            if (!p) return null
            return (
              <Item key={i.produtoId}>
                <ItemInfo>
                  <strong>{p.nome}</strong>
                  <span>Qtd: {i.quantidade}</span>
                </ItemInfo>
                <RemoveBtn onClick={() => onRemove(i.produtoId)}>
                  <FiTrash2 />
                </RemoveBtn>
              </Item>
            )
          })}
        </ItemList>
        <CheckoutBtn onClick={onCheckout}>Finalizar Pedido</CheckoutBtn>
      </Drawer>
    </Backdrop>
  )
}

export default CartModal
