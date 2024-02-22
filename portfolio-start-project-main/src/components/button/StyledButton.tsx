import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


export const DownloadButton=styled.button`
    ${font({ family:"'Poppins', sans-serif", weight: 400, Fmax:26, Fmin:17})}

    border-radius: 10px;
    background: linear-gradient(180.00deg, rgb(21, 185, 185),rgb(60, 29, 255) 100%);
    width: 278px;
    min-height: 72px;
    color: rgb(255, 255, 255);
    //font-family: Poppins, sans-serif;
    //font-size: 26px;
    //font-weight: 400;
    letter-spacing: 0.05em;

    @media ${theme.media.mobile} {
        width: 190px;
        height: 45px;
        margin-bottom: 80px;
    }
    `