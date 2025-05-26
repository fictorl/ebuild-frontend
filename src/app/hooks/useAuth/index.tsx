'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { AuthPayload } from '@/app/types/auth'

export const useAuth = () => {
  const base = 'http://localhost:3000'
  const router = useRouter()

  const login = async (
    userType: 'usuario' | 'lojista',
    payload: AuthPayload
  ) => {
    const path = userType === 'usuario' ? 'usuarios' : 'lojas'
    const body = userType === 'usuario'
      ? { email: payload.email, senha: payload.senha }
      : { cnpj: payload.cnpj, senha: payload.senha }

    try {
      const response = await axios.post(`${base}/${path}/login`, body)
      const token = response.data?.token

      if (!token) throw new Error('Token não retornado pelo servidor.')

      const storageKey = userType === 'lojista' ? 'token_lojista' : 'token_usuario'
      localStorage.setItem(storageKey, token)

      toast.success('Login realizado com sucesso!')

      if (userType === 'lojista') {
        router.push('/pages/lojista')
      } else {
        router.push('/pages/usuario')
      }

      return response
    } catch (error: any) {
      const message = error?.response?.data?.message || 'Erro ao fazer login.'
      toast.error(message)
      throw error
    }
  }

  const register = async (
    userType: 'usuario' | 'lojista',
    payload: AuthPayload
  ) => {
    const path = userType === 'usuario' ? 'usuarios' : 'lojas'

    try {
      const response = await axios.post(`${base}/${path}/register`, payload)
      toast.success('Cadastro realizado com sucesso!')
      return response
    } catch (error: any) {
      const message = error?.response?.data?.message || 'Erro ao cadastrar.'
      toast.error(message)
      throw error
    }
  }

  return { login, register }
}
