import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {S} from "./AboutMe_Styles";

const expirienceData = [
    {
        year: "2017",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        year: "2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        year: "2019",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        year: "2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

]
export const AboutMe: React.FC = () => {
    return (
        <S.MyExperience>
            <Container>
                <SectionTitle>About me</SectionTitle>
                <S.Experience>

                    {expirienceData.map((d) => {
                        return <S.DescriptionExperience>
                            <FlexWrapper direction={"column"} align={"center"}>
                                <span>{d.year}</span>
                                <S.Dot></S.Dot>
                                <p>{d.description}</p>
                            </FlexWrapper>
                        </S.DescriptionExperience>
                    })}


                </S.Experience>
            </Container>
        </S.MyExperience>
    );
};


