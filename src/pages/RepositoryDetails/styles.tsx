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
export const Circle = styled.div`
width:120px;
padding:30px;
justify-content:center;
align-itens:center;
aligh-self:center;
color:#fff;
border-radius:100px;
background-color:#555
`
export const Count = styled.div`
${({ theme }) => css`
width:150px;
padding:20px;
justify-content:center;
align-itens:center;
text-align:center;
color:#fff;
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
export const Avatar = styled.img`
    width:100px;
    overflow:hidden;
    border-radius:100px;
`