import styled from 'styled-components'

interface FooterProps {
  isOpen: boolean
}

export const FooterContent = styled.div`
display: flex;
flex:1;
heigth:100px;
background-color:#272822;
width:100%;
flex-direction: column;
align-items: center;
gap: 0.5rem;
border-bottom: 1px solid #999;
padding:20px;
color:#fff;
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
margin-bottom: 0px;
`
