import styled from "styled-components";

export const SectionTitle = styled.h2`
    height: 110px;
    font-size: 24px;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SeatsContent = styled.div`
    width: 100vw;
    margin-top: 67px;
`;

export const SeatsList = styled.ul`
    width: 100vw;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 31px;
    margin-top: -18px;
`;

export const SeatStateList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 76vw;
    margin: 16px auto 42px auto;
`;

export const SeatState = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
    font-size: 13px;
    text-align: center;
    }
    div {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    }
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

export const SelectedStateExample = styled.div`
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
`;

export const AvailableStateExample = styled.div`
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
`;

export const UnavailableStateExample = styled.div`
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`;

export const Form = styled.div`
    margin-left: 24px;
    input {
    width: 327px;
    height: 51px;
    border: 1px solid #D4D4D4;
    margin-bottom: 7px;
    }
    p {
    font-size: 18px;
    color: #293845;
    margin-bottom: 3px;
    }
`;

export const BoxButton = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const ReserveSeatsButton = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    font-size: 18px;
    color: #FFFF;
    border-radius: 3px;
    border: none;
    margin-top: 50px;
    margin-bottom: 150px;
`;

















