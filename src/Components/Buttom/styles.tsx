import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { IButtonProps } from '../../Interfaces/IButton'

export interface WrapperProps
  extends Pick<IButtonProps, 'size' | 'fullWidth' | 'outline'> {
  hasIcon: boolean
}

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 8rem;
    height: 2rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: () => css`
    width: 13rem;
    height: 3rem;
  `,
  large: (theme: DefaultTheme) => css`
    width: 20.5rem;
    height: 5rem;
    font-size: ${theme.font.sizes.large};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  outline: (theme: DefaultTheme) => css`
    background: none;
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.normal};

    &:hover {
      color: ${darken(0.15, theme.colors.white)};
      border-color: ${darken(0.15, theme.colors.white)};
    }
  `,
  hasIcon: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
  disabled: () => css`
    ${({ theme }) => css`
      &:disabled {
        cursor: not-allowed;
        background-color: ${theme.colors.gray};
        border-color: ${theme.colors.gray};
      }
    `}
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, outline, disabled, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    border-radius:30px;
    background: ${theme.colors.colorSecondary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.colorSecondary};

    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.normal};
    text-align: center;

    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background: ${outline
        ? 'none'
        : darken(0.06, theme.colors.colorSecondary)};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!outline && wrapperModifiers.outline(theme)};
    ${disabled && wrapperModifiers.disabled()}
    ${hasIcon && wrapperModifiers.hasIcon()}
  `}
`
