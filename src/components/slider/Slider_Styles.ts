import styled from "styled-components";
import {theme} from "../../styles/Theme";


const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
  max-width: 500px;
  text-align: center;
`

const Text = styled.p`
`
const Name = styled.span`
  display: inline-block;
  margin: 22px 0 42px;
  font-size: 20px;
  text-transform: uppercase;
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: #d90707;
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-image: ${theme.colors.btnColor};
      width: 20px;
    }
  }

`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}