
import { useState, InputHTMLAttributes } from 'react'
import * as Styled from './styles'
import { InputTextProps } from '../../@types/InputTextType'


const InputText = ({
  onInputChange,
  label,
  name,
  initialValue = '',
  error = false,
  disabled = false,
  ...props
}: InputTextProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }
  return (
    <Styled.Wrapper disabled={disabled} error={!!error}>
      {!!label && <Styled.Label htmlFor={name}>{label}</Styled.Label>}
      <Styled.InputWrapper>
        <Styled.Input
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </Styled.InputWrapper>
      {!!error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  )
}

export default InputText