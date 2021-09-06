import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Success({hour, buyer, cpf, chosenOnesSeatsName, chosenOnesSeats}) {

    useEffect (() => {
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", {"ids": chosenOnesSeats.map((seat) => seat.id), "name": buyer, "cpf": cpf});
        
        promise.then((resp) => console.log(resp.data));
    }, [])
    
    return (
        <div className="success">
            <h2>Pedido feito com sucesso!</h2>
            <div className="content">
                <h3>Filme e sessão</h3>
                <p>{hour.movie.title}</p>
                <p>{`${hour.day.date} ${hour.day.weekday}`}</p>
                <h3>Ingressos</h3>
                {chosenOnesSeatsName.map((seat, index) => <p key={index}>{`Assento ${seat.name}`}</p>)}
                <h3>Comprador</h3>
                <p>{`Nome: ${buyer}`}</p>
                <p>{`CPF: ${cpf}`}</p>
            </div>
            <Link className="link" to="/">
                <div className="box-button">
                    <button className="go-to-home">Voltar pra a Home</button>
                </div>
            </Link>
        </div>
    );
}

