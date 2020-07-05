import styled from "styled-components"

export const Button = styled.button`
  height: 45px;
  width: 250px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  /* margin to buttons with flex display (side by side) */
  margin-left: ${(props) => `${props.marginLeft}px`};
`
