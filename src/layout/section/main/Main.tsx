import React from "react";
import myPhoto from "../../../assets/images/photo.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Mine>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap">
                    <FlexWrapper direction={"column"} justify={"center"} align={"flex-start"} initialHeight>
                        <S.Title>
                            <p>A WEB DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['A WEB DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.Title>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. </S.Text>
                        <button>Let’s begin</button>
                    </FlexWrapper>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={myPhoto} alt="my photo"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Mine>
    )
}



