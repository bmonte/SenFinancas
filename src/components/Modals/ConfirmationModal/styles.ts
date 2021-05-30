import styled, { css } from "styled-components";

export const ModalBody = styled.div`
  padding: 1rem 2.25rem;
`;

export const ModalTitle = styled.div`
  display: flex;

  img {
    margin-right: 1.5rem;
  }
`;

export const ModalWarning = styled.div`
  flex-grow: 1;
`;

export const ModalContent = styled.div`
  padding: 1rem 0;
`;

export const ModalAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface ButtonProps {
  text?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: ${({ text }) => (text ? "none" : "var(--blue)")};
  color: ${({ text }) => (text ? "var(--blue)" : "var(--shape)")};
  font-size: 1rem;

  padding: 0 2rem;
  height: 2.5rem;

  border: 0;
  border-radius: 0.25rem;

  transition: filter 0.2s, background-color 0.3s;

  &:hover {
    ${({ text }) =>
      text &&
      css`
        background-color: var(--blue);
        color: var(--shape);
      `};
    filter: brightness(0.9);
  }
`;
