import React from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';
interface IconButtonProps extends React.DOMAttributes<HTMLButtonElement> {
    size: number;
    Icon: StyledIcon;
    className?: string;
    name?: string;
}
declare function IconButton({ size, className, Icon, name, ...props }: IconButtonProps): JSX.Element;
export default IconButton;
