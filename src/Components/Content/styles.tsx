import styled from 'styled-components'

interface ContentProps {
    height: number
}

export const ContainerContent = styled.div<ContentProps>`
  display: flex;
  background-color:#F5f5f5;
  padding: 10px;
  margin:20px;
  border-radius:10px;
  border: 1px solid #ccc;
  min-height:${props => `${props.height - 200}`}px;
`
