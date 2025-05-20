export interface AuthModalProps {
  type: 'login' | 'register'
  userType: 'usuario' | 'lojista'
  onClose: () => void
}

export interface AuthPayload {
  nome?: string
  email?: string
  senha: string
  cnpj?: string
  frete?: number
  telefone?: string
  cep?: string
  rua?: string
  numero?: number
  diasAtendimento?: string
  horarioAtendimento?: string
}
