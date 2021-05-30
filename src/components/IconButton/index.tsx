import { memo } from 'react';

import { Container } from './styles'

interface IconButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function IconButton({ onClick, children }: IconButtonProps) {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  )
}

export default memo(IconButton);