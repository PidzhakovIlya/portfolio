import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import { S } from "./Skills_Styled";


const skillData = [
    {
        nameSkill: "Html",
        experience: "Beginner"
    },
    {
        nameSkill: "CSS, Sass & Bootstrap",
        experience: "Beginner"
    },
    {
        nameSkill: "JavaScript, TypeScript, JQuery",
        experience: "Beginner"
    },
    {
        nameSkill: "UI design in Figma",
        experience: "Beginner"
    },
    {
        nameSkill: "Angular",
        experience: "Beginner"
    },
    {
        nameSkill: "React",
        experience: "Beginner"
    },
    {
        nameSkill: "React Native",
        experience: "Beginner"
    },
];

const skillListData = [
    'Git',
    'Wordpress',
    'Teamwork',
    'Quick learning',
    'Engagement',
    'B2 english',
    'RWD',
];

export const MySkills = () => {
    return (
        <S.SectionSkills>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <S.SkillBarList>

                    {skillData.map((s, index) => {
                        return <Skill nameSkill={s.nameSkill} experience={s.experience} key={index}/>

                    })}

                </S.SkillBarList>
                <S.SubTitle>Additional technologies and skills</S.SubTitle>
                <S.SkillList>
                    {skillListData.map((item, index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </S.SkillList>
            </Container>
        </S.SectionSkills>
    )
}

