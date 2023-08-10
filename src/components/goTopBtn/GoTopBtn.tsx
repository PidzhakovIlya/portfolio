import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";


export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={scroll.scrollToTop}>
                    <Icon iconId={"goTop"} height={"30"} width={"30"} viewBox={"0 0 32 32"}/>
                </StyledGoTopBtn>
            )}

        </>

    );
};

const StyledGoTopBtn = styled.button`
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 8px;
  position: fixed;
  width: 35px;
  height: 35px;
  right: 30px;
  bottom: 30px;

`