'use client'
import { StyledButton } from './styles'
export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />
}
