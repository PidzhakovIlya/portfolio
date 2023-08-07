import React from "react";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/social/SocialList";
import {Container} from "../../components/Container";
import {S} from "./Footer_styles";

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={"space-evenly"} align={"center"} wrap={"wrap"}>
                    <FlexWrapper gap={"134px"} align={"center"} wrap={"wrap"}>
                        <a href="tel:12345678">Call me:<br/>123-456-789</a>
                        <a href="email: ali@ali.ali">Email: <br/> xxx@xyz.ali.com</a>
                    </FlexWrapper>
                    <SocialList gap={"65px"} width={"72px"} height={"72px"}/>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}


