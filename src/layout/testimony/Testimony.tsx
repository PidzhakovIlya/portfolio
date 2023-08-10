import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {Slider} from "../../components/slider/Slider";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";


export const Testimony: React.FC  = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"logo"} viewBox={"0 0 50 50"}/>
                    </IconWrapper>
                    <BoxSlider>
                        <Slider/>
                    </BoxSlider>
                </FlexWrapper>
            </Container>
        </StyledTestimony>

    )
        ;
};

const StyledTestimony = styled.section`
  position: relative;
  min-height: 50vh;
  
  
`
const BoxSlider = styled.div` 
  margin: 50px 0 50px;
`

const IconWrapper = styled.div`

`