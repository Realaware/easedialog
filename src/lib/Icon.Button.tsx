import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';

const IconContainer = styled.button<{ size: number }>`
  border: none;
  outline: none;

  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: all 0.1s;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(150, 150, 150);

  width: ${(p) => p.size + 3}px !important;
  height: ${(p) => p.size + 3}px !important;
`;

interface IconButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  size: number;
  Icon: StyledIcon;
  className?: string;
  name?: string;
}

function IconButton({
  size,
  className,
  Icon,
  name,
  ...props
}: IconButtonProps) {
  return (
    <IconContainer name={name} className={className} size={size} {...props}>
      <Icon size={size} />
    </IconContainer>
  );
}

export default IconButton;
