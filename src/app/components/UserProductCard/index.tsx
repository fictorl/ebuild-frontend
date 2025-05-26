'use client'
import { StyledCard, Info, Title, Description, Price, Store, ActionButton } from './styles'

interface ProductProps {
  id: number
  nome: string
  descricao: string
  preco: number
  loja: {
    nome: string
    frete: number
  }
  onOrder: () => void
}

export default function UserProductCard({ nome, descricao, preco, loja, onOrder }: ProductProps) {
  return (
    <StyledCard>
      <Info>
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <Price>R$ {preco.toFixed(2)}</Price>
        <Store>Loja: {loja.nome} | Frete: R$ {loja.frete}</Store>
      </Info>
      <ActionButton onClick={onOrder}>Adicionar ao carrinho</ActionButton>
    </StyledCard>
  )
}