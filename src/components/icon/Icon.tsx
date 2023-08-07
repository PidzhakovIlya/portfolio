import React from "react";
import iconsSprite from "../../assets/images/icons-Sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "32"} height={props.height || "32"} viewBox={props.viewBox || "0 0 32 32"} fill={props.fill || "none"}
            xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    )
}