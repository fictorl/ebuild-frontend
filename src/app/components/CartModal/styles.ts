import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex; justify-content: flex-end;
  z-index: 1000;
`
export const Drawer = styled.div`
  width: 320px;
  height: 100%;
  background: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: .5rem;
`
export const CloseBtn = styled.button`
  background: transparent; border: none;
  font-size: 1.2rem; cursor: pointer;
`
export const ItemList = styled.div`
  flex: 1; overflow-y: auto; margin: 1rem 0;
`
export const Item = styled.div`
  display: flex; justify-content: space-between;
  align-items: center; padding: .5rem 0;
  border-bottom: 1px solid #f0f0f0;
`
export const ItemInfo = styled.div`
  display: flex; flex-direction: column;
  strong { font-size: 1rem; }
  span { font-size: .9rem; color: #666; }
`
export const RemoveBtn = styled.button`
  background: transparent; border: none;
  color: #e53935; cursor: pointer;
`
export const CheckoutBtn = styled.button`
  background: #2e7d32; color: #fff;
  border: none; padding: .75rem; border-radius: 6px;
  font-weight: 700; cursor: pointer;
  &:hover { background: #276127; }
`
