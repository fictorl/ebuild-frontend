import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #fffbe6 0%, #f5f7fa 100%);
`

export const Header = styled.header`
  width: 100%;
  background: #ffca05;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  border-radius: 0 0 18px 18px;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: #212121;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: 1px;
`

export const Logo = styled.img`
  height: 6rem;
  width: 6rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 2rem 0 1.5rem 0;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 0.75rem;
  }
`

export const StyledButton = styled.button`
  background: linear-gradient(90deg, #ffe066 0%, #ffd600 100%);
  border: none;
  padding: 0.85rem 2rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  color: #212121;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  font-size: 1.05rem;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;

  &:hover {
    background: linear-gradient(90deg, #ffd600 0%, #ffe066 100%);
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  }

  &:active {
    transform: scale(0.98);
  }
`

export const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 1rem;
  margin-left: 0.5rem;
  background: #fffde7;
  color: #212121;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #ffca05;
  }
`

export const TableWrapper = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  overflow-x: auto;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  margin-bottom: 2rem;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 0.75rem 0.5rem;
    text-align: left;
  }
  th {
    background: #fffbe6;
    color: #212121;
    font-weight: 700;
    border-bottom: 2px solid #ffca05;
  }
  tr:nth-child(even) {
    background: #fafafa;
  }
  tr:hover {
    background: #fffde7;
  }
`

export const StyledInput = styled.input`
  padding: 0.65rem 1rem;
  border-radius: 8px;
  border: 1.5px solid #ffe066;
  margin: 1rem;
  background: #fffde7;
  color: #212121;
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border: 1.5px solid #ffca05;
    box-shadow: 0 0 0 2px #fffbe6;
  }

  &::placeholder {
    color: #bdb76b;
    opacity: 1;
  }
`