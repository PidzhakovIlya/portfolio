import {styled} from "styled-components";
import {font} from "../../../styles/Comman";
import {theme} from "../../../styles/Theme";

                    // <<<<<<<<<<<Styled Skills>>>>>>>>>>
const SectionSkills = styled.section`

`
const SkillBarList = styled.div`

`
const SkillList = styled.ul`
  max-width: 1920px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 33%));
  row-gap: 32px;
  justify-content: center;
  align-content: center;
  justify-items: start;
  align-items: center;
  padding-bottom: 160px;

  li {
    ${font({Fmax: 36, Fmin: 28})}
    list-style: disc;
    margin-left: 33%;
    text-align: start;
  }


`

const SubTitle = styled.h3`
  ${font({Fmax: 48, Fmin: 36})}
  text-align: center;
  padding: 160px 0 80px;

  @media ${theme.media.tablet} {
    padding: 50px 0 40px;
  }
`

//                  <<<<<<<<<<<Styled Skill>>>>>>>>>>

const Progress = styled.div`
  height: 32px;
  max-width: 1320px;
  width: 100%;
  position: relative;
  background: #162950;;
  padding: 3px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  border-radius: 83px;
`
const ProgressBar = styled.span`
  width: 50%;
  border-radius: 83px;
  display: block;
  height: 100%;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);;
  position: relative;
  overflow: hidden;
`

const Skill = styled.div`
    color: #fff;
    max-width: 1320px;
    margin: 0 auto 55px;
`

export const S = {
    SkillBarList,
    SectionSkills,
    SubTitle,
    SkillList,
    Progress,
    ProgressBar,
    Skill

}