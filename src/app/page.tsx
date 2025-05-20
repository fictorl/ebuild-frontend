'use client'
import { useState } from 'react'
import Button from '@/app/components/Button'
import AuthModal from '@/app/components/AuthModal'
import { Container, Title, Divider, Column, Logo } from './styles'

export default function HomePage() {
  const [modal, setModal] = useState<{
    mode: 'login' | 'register'
    userType: 'usuario' | 'lojista'
  } | null>(null)

  return (
    <Container>
      <Title>
        <Logo src="/ebuild.png" alt="logo" />
      </Title>

      <Divider>
        <Column>
          <Button onClick={() => setModal({ mode: 'login', userType: 'usuario' })}>
            Login como Usuário
          </Button>
          <Button onClick={() => setModal({ mode: 'register', userType: 'usuario' })}>
            Cadastrar Usuário
          </Button>
        </Column>
        <Column>
          <Button onClick={() => setModal({ mode: 'login', userType: 'lojista' })}>
            Login como Lojista
          </Button>
          <Button onClick={() => setModal({ mode: 'register', userType: 'lojista' })}>
            Cadastrar Lojista
          </Button>
        </Column>
      </Divider>

      {modal && (
        <AuthModal
          type={modal.mode}
          userType={modal.userType}
          onClose={() => setModal(null)}
        />
      )}
    </Container>
  )
}
