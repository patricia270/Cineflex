import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SuccessDiv, SuccessContent, BoxButton, GoToHome  } from "./sucesscss";


export default function Success({hour, buyer, cpf, chosenOnesSeatsName, chosenOnesSeats}) {

    useEffect (() => {
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", {"ids": chosenOnesSeats.map((seat) => seat.id), "name": buyer, "cpf": cpf});
        
        promise.then((resp) => console.log(resp.data));
    }, [])

    return (
        <SuccessDiv>
            <h2>Pedido feito com sucesso!</h2>
            <SuccessContent>
                <h3>Filme e sessão</h3>
                <p>{hour.movie.title}</p>
                <p>{`${hour.day.date} ${hour.day.weekday}`}</p>
                <h3>Ingressos</h3>
                {chosenOnesSeatsName.map((seat, index) => <p key={index}>{`Assento ${seat.name}`}</p>)}
                <h3>Comprador</h3>
                <p>{`Nome: ${buyer}`}</p>
                <p>{`CPF: ${cpf}`}</p>
            </SuccessContent>
            <BoxButton>
                <Link className="link" to="/">
                    <GoToHome>Voltar pra a Home</GoToHome>
                </Link>
            </BoxButton>
        </SuccessDiv>
    );
}