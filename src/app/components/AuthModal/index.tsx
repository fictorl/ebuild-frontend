'use client'
import { useState } from 'react'
import Modal from '../Modal'
import { Form, FormTitle } from './styles'
import { useAuth } from '@/app/hooks/useAuth'
import { AuthModalProps, AuthPayload } from '@/app/types/auth'

export default function AuthModal({ type, userType, onClose }: AuthModalProps) {
    const [data, setData] = useState<AuthPayload>({ senha: '' })
    const { login, register } = useAuth()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type: t } = e.target
        setData(prev => ({
            ...prev,
            [name]: t === 'number' ? Number(value) : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (type === 'login') await login(userType, data)
        else await register(userType, data)
        onClose()
    }

    return (
        <Modal onClose={onClose}>
            <FormTitle>
                {type === 'login' ? 'Login' : 'Cadastro'} — {userType.toUpperCase()}
            </FormTitle>

            <Form onSubmit={handleSubmit}>
                {/* Cadastro Usuário */}
                {type === 'register' && userType === 'usuario' && (
                    <>
                        <input name="nome" placeholder="Nome" onChange={handleChange} required />
                        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                        <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
                    </>
                )}


                {/* Cadastro Lojista */}
                {type === 'register' && userType === 'lojista' && (
                    <>
                        <input name="nome" placeholder="Nome da Loja" onChange={handleChange} required />
                        <input name="cnpj" placeholder="CNPJ" onChange={handleChange} required />
                        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                        <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
                        <input name="frete" type="number" placeholder="Frete (R$)" onChange={handleChange} required />
                        <input name="telefone" placeholder="Telefone" onChange={handleChange} required />
                        <input name="cep" placeholder="CEP" onChange={handleChange} required />
                        <input name="rua" placeholder="Rua" onChange={handleChange} required />
                        <input name="numero" type="number" placeholder="Número" onChange={handleChange} required />
                        <input name="diasAtendimento" placeholder="Dias de Atendimento" onChange={handleChange} required />
                        <input name="horarioAtendimento" placeholder="Horário de Atendimento" onChange={handleChange} required />
                    </>
                )}

                {/* Login Usuário */}
                {type === 'login' && userType === 'usuario' && (
                    <>
                        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                        <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
                    </>
                )}

                {/* Login Lojista */}
                {type === 'login' && userType === 'lojista' && (
                    <>
                        <input name="cnpj" placeholder="CNPJ" onChange={handleChange} required />
                        <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
                    </>
                )}

                <button type="submit">
                    {type === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
            </Form>
        </Modal>
    )
}
