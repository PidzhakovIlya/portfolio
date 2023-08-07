import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import projectImg1 from "../../../assets/images/project-1.webp"
import projectImg2 from "../../../assets/images/project-2.webp"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";


const workData = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg1,
        title: "PROJECT 1"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg2,
        title: "PROJECT 2"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg2,
        title: "PROJECT 3"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg2,
        title: "PROJECT 4"
    }
]
export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <S.GridWrapper>
                    {workData.map((w) => {
                        return <Work
                            text={w.text}
                            src={w.src}
                            title={w.title}/>
                    })}
                </S.GridWrapper>
            </Container>
        </S.Works>
    );
};

