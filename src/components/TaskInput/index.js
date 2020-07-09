//Span that is showed on error in form validation
import styled from "styled-components"

export const TaskInput = styled.div`
  border: 1px solid #ef7734;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  max-width: 100%;

  input {
    width: 100%;
    height: 35px;
    padding: 10px;
    border-radius: 4px;
    font-size: 1.1em;
    border: none;
    font-family: SF-RG;
    color: #574437;
  }
`
