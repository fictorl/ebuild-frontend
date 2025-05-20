import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 100%;
  max-width: 420px;
`
