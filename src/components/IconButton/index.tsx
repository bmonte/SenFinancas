import { memo } from 'react';

import { Container } from './styles'

interface IconButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function IconButton({ title, onClick, children }: IconButtonProps) {
  return (
    <Container onClick={onClick} title={title}>
      {children}
    </Container>
  )
}

export default memo(IconButton);