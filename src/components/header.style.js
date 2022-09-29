import styled from "styled-components"

export const Header = styled.header`
  background: white;
  display: flex;
  padding: 0 20px;
`

export const Menu = styled.div`
  line-height: 60px;
  display: flex;

  margin-left: auto;
  a {
    padding: 0 10px;
    &:hover {
      color: orange;
    }
  }
`
