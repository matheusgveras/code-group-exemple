import { ForwardRefRenderFunction } from 'react'
import * as Styled from './styles'
import { IButtonProps } from '../../Interfaces/IButton'


const Button: ForwardRefRenderFunction<Styled.WrapperProps, IButtonProps> = ({
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    outline = false,
    ...props
}) => {
    return (
        <Styled.Wrapper
            size={size}
            fullWidth={fullWidth}
            hasIcon={!!icon}
            outline={outline}
            {...props}
        >
            {!!icon && icon}
            {!!children && <span>{children}</span>}
        </Styled.Wrapper>
    )
}

export default Button