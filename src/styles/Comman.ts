import {theme} from "./Theme";


type FontPropsType = {
    weight?: number
    family?: string
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number

}
export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${ color || theme.colors.font };
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

