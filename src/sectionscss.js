import styled from "styled-components";

export const SectionsDiv = styled.div`
    width: 100vw;
    margin-top: 67px;
    margin-bottom: 118px;
`; 

export const Day = styled.p`
    font-size: 20px;
    height: 35px;
    color: #293845;
    margin-left: 24px;
    margin-bottom: 22px;
`;

export const HourContent = styled.div`
    display: flex;
    padding-left: 23px;
`;

export const SectionTitle = styled.h2`
    height: 110px;
    font-size: 24px;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hour = styled.div`
    width: 83px;
    height: 43px; 
    background-color: #E8833A;
    color: #FFFF;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 25px;
    border: none;
`;

export const Footer = styled.div`
    height: 117px;
    background-color: #DFE6ED;
    padding-left: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    img {
    width: 48px;
    height: 72px; 
    }
`;

export const SmallPictureBox = styled.div`
    background-color: #FFFF;
    width: 64px;
    height: 89px; 
    margin-top: 14px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxMOvieAndDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
    font-size: 26px;
    margin-left: 14px;
    }
`;