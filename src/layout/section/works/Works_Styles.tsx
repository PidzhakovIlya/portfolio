import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Comman";

//                          ==========Styled Works============

const Works = styled.section`

`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(360px - 30px), 550px));
  grid-auto-rows: minmax(350px, auto);
  justify-content: center;
  align-content: center;
  gap: 97px 220px;
  padding-bottom: 200px;

  @media ${theme.media.mobile} {
    padding-bottom: 50px;
    gap: 30px;
  }
`

                // ==========Styled Work============


const Work = styled.div`
  max-width: 550px;
  width: 100%;
  height: 700px;
  border-radius: 50px 0;
  border: 1px solid #A39D9D;
  background: #0F1624;
  padding: 25px;

  & ${FlexWrapper} {
    height: 100%;
  }

`

const Image = styled.img`
  width: 100%;
  max-height: 266px;
  object-fit: cover;
  border-radius: 24px 8px 8px 8px;
`
const Description = styled.p`
  ${font({Fmax: 28, Fmin: 20})}
  text-align: start;

`


const Title = styled.h3`
  ${font({Fmax:36, Fmin:28})}
  color: #FFF;
  position: relative;
  text-align: start;
  
  
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
    width: 100%;
    height: 4px;
    background-image: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 83px;
  }
`
export const S = {
    Works,
    GridWrapper,
    Work,
    Image,
    Description,
    Title
}
