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
  width: calc(100% - 100px);
  margin-left: 20px;

  input {
    width: 500px;
    height: 35px;
    padding: 10px;
    border-radius: 4px;
    font-size: 1.1em;
    border: none;
    font-family: SF-RG;
    color: #574437;
  }
`
