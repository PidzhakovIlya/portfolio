import React from "react";
import {S} from "../Skills_Styled"

type StyledSkillPropsType = {
    nameSkill: string
    experience: string
}

export const Skill = (props: StyledSkillPropsType) => {
    return (
        <S.Skill>
            <div>
                <span>{props.nameSkill}</span>
                <span>{props.experience}</span>
            </div>
            <S.Progress>
                <S.ProgressBar></S.ProgressBar>
            </S.Progress>
        </S.Skill>
    )
}


