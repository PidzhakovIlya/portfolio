import React, {useState} from "react";
import {Logo} from "../../components/logo/Logo";
import {SocialList} from "../../components/social/SocialList";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desctopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"


const items = ["Projects", "Technologies", "About me"]
export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(()=>{
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return ()=> window.removeEventListener("resize", handleWindowResize);

    },[])


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                                        : <DesktopMenu menuItems={items}/>}
                    <SocialList gap={"30px"}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}



  
  

