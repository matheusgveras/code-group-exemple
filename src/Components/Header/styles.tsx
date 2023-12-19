import styled from 'styled-components'

interface HeaderProps {
  isOpen: boolean
}

export const HeaderContent = styled.div`
  display: flex;
  flex:1;
  heigth:100px;
  background-color:#272822;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid #999;
  padding-bottom: 1rem;
  margin-bottom: 20px;
  padding:20px;
  color:#999
`
export const Logo = styled.img`
    width:100px;
`
