import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";


export const SectionTitle = styled.h2`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:55, Fmin:42})}
    //font-size: 55px;
    //font-weight: 600;
    letter-spacing: 0.05em;
    display: table;
    position: relative;
    padding-top: 56px;
    padding-bottom: 31px;
    &::before {
        border-top: 2px solid rgb(255, 255, 255);
        content: "";
        position: absolute;
        width: 65%;
        margin-left: 8px;
        margin-top: -10px;
    }
`


