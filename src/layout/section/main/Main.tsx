import React from "react";
import myPhoto from "../../../assets/images/photo.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.Mine>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap = "wrap" >
                    <FlexWrapper direction={"column"} justify={"center"} align={"flex-start"}>
                        <S.Title>A WEB DEVELOPER</S.Title>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore et
                             dolore magna aliqua. </S.Text>
                        <button>Let’s begin</button>
                    </FlexWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={myPhoto} alt="my photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Mine>
    )
}



