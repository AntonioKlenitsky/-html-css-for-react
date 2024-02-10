import styled from "styled-components";


export const SectionTitle = styled.h2`
    font-size: 55px;
    font-weight: 600;
    letter-spacing: 0.05em;
    display: table;
    position: relative;
    ::before {
        border-top: 2px solid rgb(255, 255, 255);
        content: "";
        position: absolute;
        width: 70%;
        margin-left: 8px;
    }
`


