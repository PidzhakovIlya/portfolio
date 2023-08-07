import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Slider_Styles";

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper direction={"column"}>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi fuga praesentium
                        quam
                        quis quo, repellat repellendus vitae! Architecto asperiores assumenda cupiditate exercitationem
                        laudantium maxime quae quo ullam vel veritatis.</S.Text>
                    <S.Name>@Ivan Ivanow</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>

        </S.Slider>
    );
};

