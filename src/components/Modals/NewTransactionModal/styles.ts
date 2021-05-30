import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;
    background: #E7E9EE;
    font-weight: 400;
    font-size: 1rem;
    
    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    
    margin-top: 0.5rem;
    background: var(--blue);
    color: var(--shape);
    border: 0;
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: 1rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface TransactionButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: '#33CC95',
  red: '#E62E4D'
}

export const TransactionButton = styled.button<TransactionButtonProps>`
  width: 100%;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #D7D7D7;
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) 
    : 'transparent'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')}
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    color: var(--text-title);
    font-size: 1rem;
  }
`