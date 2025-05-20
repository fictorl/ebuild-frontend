import { StyledInput, StyledButton } from '@/app/pages/lojista/styles'

interface CategoriaFormProps {
  novaCategoria: string
  setNovaCategoria: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
}

export function CategoriaForm({
  novaCategoria,
  setNovaCategoria,
  onSubmit,
  onCancel,
}: CategoriaFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        marginTop: 24,
        background: '#fffbe6',
        borderRadius: 8,
        padding: 16,
        boxShadow: '0 2px 8px rgba(255, 214, 0, 0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        maxWidth: 340,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <h3 style={{ margin: 0, fontWeight: 600, color: '#bdb76b', fontSize: '1.1rem' }}>
        Nova Categoria
      </h3>
      <StyledInput
        required
        placeholder="Nome da nova categoria"
        value={novaCategoria}
        onChange={e => setNovaCategoria(e.target.value)}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <StyledButton type="submit" style={{ flex: 1 }}>
          Salvar Categoria
        </StyledButton>
        <StyledButton
          type="button"
          style={{ background: '#eee', color: '#212121', flex: 1 }}
          onClick={onCancel}
        >
          Cancelar
        </StyledButton>
      </div>
    </form>
  )
}