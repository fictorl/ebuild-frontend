import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;
`

export const Sidebar = styled.aside`
  width: 260px;
  background: #fff;
  padding: 2rem 1.5rem;
  box-shadow: 2px 0 8px rgba(0,0,0,0.05);

  @media(max-width: 800px) {
    display: none;
  }
`

export const FiltersHeader = styled.h2`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #333;
`

export const FilterSection = styled.div`
  margin-bottom: 1.25rem;

  label {
    font-weight: 600;
    display: block;
    margin-bottom: .5rem;
  }

  select, input[type="number"] {
    width: 100%;
    padding: .5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  div {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-top: .25rem;
  }
`

export const CartIconWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`

export const CartButton = styled.button`
  background: #ffd600;
  border: none;
  padding: .75rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
  transition: background .2s;

  &:hover {
    background: #ffca05;
  }
`

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`
