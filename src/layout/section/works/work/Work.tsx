import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Works_Styles";


type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <FlexWrapper direction={"column"} justify={"space-between"} >
                <S.Image src={props.src} alt="project-1"/>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.text}</S.Description>
                <button>Look it up</button>
            </FlexWrapper>
        </S.Work>
    );
};


