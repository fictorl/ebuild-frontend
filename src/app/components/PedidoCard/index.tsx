interface PedidoCardProps {
  pedido: any
}

export function PedidoCard({ pedido }: PedidoCardProps) {
  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: 8,
      padding: 16,
      background: '#fff',
      marginBottom: 24
    }}>
      <div style={{ marginBottom: 8, fontWeight: 600 }}>
        Pedido #{pedido.id} | Cliente: {pedido.usuario?.nome} ({pedido.usuario?.email})
      </div>
      <div style={{ marginBottom: 8 }}>
        <b>Data:</b> {new Date(pedido.criadoEm).toLocaleString()}
      </div>
      <table style={{ width: '100%', marginBottom: 8, borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: 4 }}>Produto</th>
            <th style={{ textAlign: 'left', padding: 4 }}>Descrição</th>
            <th style={{ textAlign: 'center', padding: 4 }}>Qtd</th>
            <th style={{ textAlign: 'right', padding: 4 }}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {pedido.produtos.map((item: any) => (
            <tr key={item.id}>
              <td style={{ padding: 4 }}>{item.produto?.nome}</td>
              <td style={{ padding: 4 }}>{item.produto?.descricao}</td>
              <td style={{ textAlign: 'center', padding: 4 }}>{item.quantidade}</td>
              <td style={{ textAlign: 'right', padding: 4 }}>R$ {item.produto?.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontWeight: 600, textAlign: 'right' }}>
        Total: R$ {pedido.total.toFixed(2)}
      </div>
    </div>
  )
}