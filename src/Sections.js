import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";


export default function Sections() {
    const [sections, setSections] = useState ([]);
    const [chosenMovie, setChosenMovie] = useState ("");

    const {
        idMovie
    } = useParams();

    useEffect (() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idMovie}/showtimes`)
            .then(res => {
                setChosenMovie(res.data);
                setSections([...res.data.days]);
            })
    },[]);

  
    return (
        <SectionsDiv>
            <SectionTitle>Selecione o horário</SectionTitle>
            {sections.map((section, index) => (
                <DayAndTimes key={index} weekday={section.weekday} 
                date={section.date} id={section.id} showtimes={section.showtimes} />
            ))}
            <Footer>
                <SmallPictureBox>
                    <img src={chosenMovie.posterURL} alt="imagem do filme" />
                </SmallPictureBox>
                <BoxMOvieAndDay>
                    <p>{chosenMovie.title}</p>
                </BoxMOvieAndDay>
            </Footer>          
        </SectionsDiv>
    );
}

function DayAndTimes ({weekday, date, showtimes }) {
    return (
        <>
            <Day>{`${weekday} - ${date}`}</Day>
            <HourContent>
                {showtimes.map((showtime, index) => (<Time key={index} name={showtime.name} id={showtime.id}/>))}
            </HourContent>
        </>
    );
}


function Time ({name, id}) {
    return (
        <Link className="link" to={`/seats/${id}`}>
            <Hour>{name}</Hour>
        </Link>
    );
}


const SectionsDiv = styled.div`
    width: 100vw;
    margin-top: 67px;
    margin-bottom: 118px;
`; 

const Day = styled.p`
    font-size: 20px;
    height: 35px;
    color: #293845;
    margin-left: 24px;
    margin-bottom: 22px;
`;

const HourContent = styled.div`
    display: flex;
    padding-left: 23px;
`;


const SectionTitle = styled.h2`
    height: 110px;
    font-size: 24px;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Hour = styled.div`
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


const Footer = styled.div`
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

const SmallPictureBox = styled.div`
    background-color: #FFFF;
    width: 64px;
    height: 89px; 
    margin-top: 14px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BoxMOvieAndDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
    font-size: 26px;
    margin-left: 14px;
    }
`;