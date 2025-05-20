'use client'
import React from 'react'
import { Backdrop, Content } from './styles'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <Backdrop onClick={onClose}>
      <Content onClick={e => e.stopPropagation()}>
        {children}
      </Content>
    </Backdrop>
  )
}
