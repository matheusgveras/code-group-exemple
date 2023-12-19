import styled from 'styled-components'

interface ContentProps {
  isOpen: boolean
}

export const ContainerContent = styled.div`
  display: flex;
  flex:1;
  heigth:100px;
  background-color:#F5f5f5;
  padding: 10px;
  margin:20px;
  border-radius:10px;
  border: 1px solid #ccc;
`
