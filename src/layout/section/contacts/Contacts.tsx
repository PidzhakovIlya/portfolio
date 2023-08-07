import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"First name"}/>
                    <S.Field placeholder={"Last Name"}/>
                    <S.Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}>Send Message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    )
}

