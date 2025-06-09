import { StyledInput, StyledButton, StyledSelect } from '@/app/pages/lojista/styles';
import { FaPlus, FaTimes, FaSave, FaTag } from 'react-icons/fa';

interface ProdutoFormProps {
  form: any;
  setForm: (fn: (f: any) => any) => void;
  categoriasObj: any[];
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  onNovaCategoria: () => void;
}

export function ProdutoForm({
  form,
  setForm,
  categoriasObj,
  loading,
  onSubmit,
  onCancel,
  onNovaCategoria,
}: ProdutoFormProps) {
  const isEditing = !!form.id;

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        maxWidth: 420,
        margin: '0 auto',
      }}
    >
      <h2 style={{ margin: 0, fontWeight: 700, color: '#212121', fontSize: '1.25rem' }}>
        <FaTag style={{ marginRight: 8, color: '#ffd600' }} />
        {isEditing ? 'Editar Produto' : 'Novo Produto'}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontWeight: 500 }}>Nome</label>
        <StyledInput
          required
          placeholder="Nome do produto"
          value={form.nome}
          onChange={(e) => setForm((f: any) => ({ ...f, nome: e.target.value }))}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontWeight: 500 }}>Descrição</label>
        <StyledInput
          required
          placeholder="Descrição do produto"
          value={form.descricao}
          onChange={(e) => setForm((f: any) => ({ ...f, descricao: e.target.value }))}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontWeight: 500 }}>Preço</label>
        <StyledInput
          required
          type="number"
          step="0.01"
          min="0"
          placeholder="Preço"
          value={form.preco}
          onChange={(e) => setForm((f: any) => ({ ...f, preco: e.target.value }))}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontWeight: 500 }}>Categoria</label>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <StyledSelect
            required
            value={form.categoriaProdutoId}
            onChange={(e) => setForm((f: any) => ({ ...f, categoriaProdutoId: e.target.value }))}
            style={{ flex: 1 }}
            disabled={isEditing}
          >
            <option value="">Selecione</option>
            {categoriasObj.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </StyledSelect>
          {!isEditing && (
            <StyledButton
              type="button"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.95rem',
                background: '#fffbe6',
                border: '1.5px solid #ffd600',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              onClick={onNovaCategoria}
            >
              <FaPlus style={{ color: '#ffd600' }} />
              Nova Categoria
            </StyledButton>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
        <StyledButton
          type="submit"
          disabled={loading}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <FaSave />
          {loading ? 'Salvando...' : isEditing ? 'Salvar Alterações' : 'Salvar Produto'}
        </StyledButton>
        <StyledButton
          type="button"
          onClick={onCancel}
          style={{
            background: '#eee',
            color: '#212121',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <FaTimes />
          Cancelar
        </StyledButton>
      </div>
    </form>
  );
}