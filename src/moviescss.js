import styled from "styled-components";


export const SectionTitle = styled.h2`
    height: 110px;
    font-size: 24px;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MoviesDiv = styled.div`
    width: 100vw;
    margin-top: 67px;
`;

export const MoviesOption = styled.ul`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Movie = styled.li`
    width: 145px;
    height: 209px;
    margin-bottom: 11px;
    border-radius: 3px;   
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display:flex;
    justify-content: center;
    align-items: center;
    img {
    width: 129px;
    height: 193px;   
    }
`;
