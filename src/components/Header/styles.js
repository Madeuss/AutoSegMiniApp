//Span that is showed on error in form validation
import styled from "styled-components"

export const Nav = styled.header`
  background-color: #574437;
  height: 100px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 650px;
    height: 100px;
    padding: 20px;
  }

  section {
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 15px;
    text-transform: Capitalize;
    color: #f9f4c2;
    font-family: SF-UL;
    font-size: 20px;
    text-overflow: ellipsis;
  }

  #profile-marca-img {
    width: 200px;

    @media (max-width: 300px) {
      width: 100%;
    }
  }
`
