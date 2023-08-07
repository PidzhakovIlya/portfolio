import styled from "styled-components";
import {font} from "../../../styles/Comman";
import {theme} from "../../../styles/Theme";
import themPhoto from "../../../assets/images/drawing.svg"

const Mine = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  margin-top: 50px;
`

const Title = styled.h1`
  ${font({weight: 700, Fmax: 64, Fmin: 36, })};
  
`
const Text = styled.p`
  ${font({weight: 600, Fmax: 36, Fmin: 24,})}
  display: inline-block;
  max-width: 989px;
  margin: 34px 0 92px;
  color: ${theme.colors.textDescription};
  text-align: start;

`
const PhotoWrapper = styled.div`
  //position: relative;    
  z-index: 0;
  
//   &::before {
//     content: url(${themPhoto});
//     position: absolute;
//     bottom: -50%;
//     right: -132px;
//     z-index: -1;
//    
//     @media ${theme.media.mobile} {
//       display: block;
//       width: 135px;  
//     }
//   }
`

const Photo = styled.img`
  width: 520px;
  height: 600px;
  object-fit: cover;
  border-radius: 50px 0;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

export const S = {
    Mine,
    Title,
    Text,
    PhotoWrapper,
    Photo
}