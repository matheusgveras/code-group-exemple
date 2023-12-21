import { InputHTMLAttributes } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { InputTextProps } from '../../@types/InputTextType'


type WrapperProps = Pick<InputTextProps, 'disabled'> & { error: boolean }

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border: 2px solid pink;
    }
    & ${Label} {
      color: pink;
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Input},
    ${InputWrapper} {
      cursor: not-allowed;
      background-color: gray;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border: 1px solid gray;
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid pink;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: 3rem;
    width: 100%;
    padding: ${theme.spacings.xxsmall};

    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkPurple};

    background: transparent;
    border: 0;
    outline: none;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.regular};
    color: ${theme.colors.darkPurple};

    margin-bottom: 0.5rem;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.pink};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 0.5rem;
  `}
`
