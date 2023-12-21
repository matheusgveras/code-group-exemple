import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-itens:center;
gap:20px;

background-color:#f1f1f1;
padding:20px;
border-radius:20px;
border-color:#ccc;
`

export const Button = styled.a`
${({ theme }) => css`
width:50px;
padding:10px;
text-align:center;
color:#fff;
text-decoration:none;
border-radius:100px;
background-color:${theme.colors.colorSecondary};
`}
`

export const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-itens:center;
gap:20px;
width:100%;
`

export default Container