import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem;
`

export const Header = styled.header`
  width: 100%;
  background: #ffc107;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`

export const Title = styled.h1`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #212121;
  margin: 0;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: clamp(3rem, 10vw, 8rem);
  width: auto;
  margin-left: 0.75rem;
`

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin: 4rem auto 0;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  gap: 1rem;
`
