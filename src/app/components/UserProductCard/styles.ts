import styled from 'styled-components'

export const StyledCard = styled.div`
  width: 280px;
  height: 240px;
  background: #fff;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  overflow: hidden;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #212121;
`

export const Description = styled.p`
  margin: 0;
  color: #555;
`

export const Price = styled.span`
  font-weight: bold;
  color: #2e7d32;
`

export const Store = styled.span`
  font-size: 0.9rem;
  color: #666;
`

export const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #ffd600;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ffca05;
  }

  &:active {
    transform: scale(0.97);
  }
`
