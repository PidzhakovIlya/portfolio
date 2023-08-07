import styled from "styled-components";
import {theme} from "../../styles/Theme";

const MyExperience = styled.section`
  padding-bottom: 176px;

`

const Experience = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

`
const Dot = styled.span`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
  background-color: ${theme.colors.font};
  border-radius: 50%;
  margin-bottom: 30px;

  &::before {
    content: "";
    position: absolute;
    width: 392px;
    //width: 100%;
    height: 12px;
    background-color: ${theme.colors.font};
    top: 50%;
    transform: translateY(-50%);
  }

`
const DescriptionExperience = styled.div`
  width: 347px;

  & span:first-child {
    font-size: 36px;
  }

  & p {
    font-size: 28px;
    font-weight: 600;
  }

  &:last-child ${Dot} {
    &::before {
      width: 0;
    }
  }
}

`
export const S = {
    MyExperience,
    Experience,
    Dot,
    DescriptionExperience
}