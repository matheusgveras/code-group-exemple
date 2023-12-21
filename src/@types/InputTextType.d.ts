export type InputTextProps = {
    onInputChange?: (value: string) => void
    label?: string
    initialValue?: string
    disabled?: boolean
    error: boolean
  } & InputHTMLAttributes<HTMLInputElement>