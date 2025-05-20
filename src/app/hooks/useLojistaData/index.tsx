import axios from 'axios'

const base = 'http://localhost:3000'

export async function getPedidos(token: string, cnpj: string) {
  const res = await fetch(`http://localhost:3000/pedidos/loja?cnpj=${cnpj}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.json()
}

export async function getProdutos(token: string) {
  const res = await axios.get(`${base}/produtos`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function createProduto(token: string, produto: any) {
  const res = await axios.post(`${base}/produtos`, produto, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function deleteProduto(token: string, id: number) {
  const res = await axios.delete(`${base}/produtos/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function getCategorias(token: string, cnpj: string) {
  const res = await axios.get(`${base}/categorias/loja/${cnpj}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function createCategoria(token: string, nome: string) {
  const res = await axios.post(`${base}/categorias`, { nome }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}