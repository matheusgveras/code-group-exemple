import { AriaAttributes, ButtonHTMLAttributes } from "react"

export interface IButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    AriaAttributes {
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    icon?: JSX.Element
    outline?: boolean
}