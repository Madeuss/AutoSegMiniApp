import styled from "styled-components"

export const Button = styled.button`
  height: 40px;
  width: 250px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`
