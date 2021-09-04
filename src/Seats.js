import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Seats() {
    const [seats, setSeats] = useState([]);
    const [chosenSection, setChosenSection] = useState("");
    const [section, setSection] = useState ("");
    const [hour, setHour] = useState("");
    const {
        idSection
    } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSection}/seats`)
            .then(res => {
                setSeats([...res.data.seats])
                console.log(res.data.seats)
                setChosenSection(res.data.movie)
                setSection(res.data.day);
                setHour(res.data)
            })
    }, []);

    return (
        <div className="seats-content">
            <h2 className="section-title">Selecione o(s) assento(s)</h2>
            <ul className="seats-list">
                {seats.map(({name}) => (
                    <li className="number-seat">{name}</li>
                ))}
            </ul>
            <ul className="seat-state-list">
                <li className="seat-state">
                    <div className="selected"></div>
                    <p>Selecionado</p>
                </li>
                <li className="seat-state">
                    <div className="available"></div>
                    <p>Disponível</p>
                </li>   
                <li className="seat-state">
                    <div className="unavailable"></div>
                    <p>Indisponível</p>
                </li>                
            </ul>  
            <div className="form">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />    
            </div>  
            <div className="box-button">
                <button className="reserve-seats">Reservar assento(s)</button> 
            </div>  
            <div className="footer">
                <div className="movie-box-little">
                    <img src={chosenSection.posterURL} alt="imagem do filme" />
                </div>
                <div className="box-movie-and-day">
                    <p>{chosenSection.title}</p>
                    <p>{`${section.weekday} - ${hour.name}`}</p>
                </div>
            </div>      
        </div>

    );
}