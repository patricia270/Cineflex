import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
                console.log(res.data.days.date)
            })
    },[]);


    return (
        <div className="sections">
            <h2 className="section-title">Selecione o horário</h2>
            {sections.map(({weekday, date, id, showtimes }) => (
                <>
                    <p className="day">{`${weekday} - ${date}`}</p>
                    <div className="hour-content" key={id}>
                        {showtimes.map((hour) => (
                            <div className="hour">{hour.name}</div>
                        ))}
                    </div>
                </>
            ))}
            <div className="footer">
                <div className="movie-box-little">
                    <img src={chosenMovie.posterURL} alt="imagem do filme" />
                </div>
                <div className="box-movie-and-day">
                    <p>{chosenMovie.title}</p>
                </div>
            </div>          
        </div>
    );
}