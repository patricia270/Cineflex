import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import { SectionsDiv, Day, HourContent, SectionTitle, Hour, Footer, SmallPictureBox, BoxMOvieAndDay } from "./sectionscss";

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

    if (chosenMovie === "") {
        return (
            <Loading />
        );
    }
  
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
        <Link to={`/seats/${id}`}>
            <Hour>{name}</Hour>
        </Link>
    );
}


