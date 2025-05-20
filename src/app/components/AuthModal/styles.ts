import styled from 'styled-components'

export const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.95rem;
    transition: border 0.2s;

    &:focus {
      border-color: #0070f3;
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
    }
  }

  button[type='submit'] {
    background-color: #ffeb3b;
    color: #000;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #005bb5;
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`
