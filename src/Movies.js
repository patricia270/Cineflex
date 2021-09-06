import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SectionTitle } from "./seatscss";
import { MoviesDiv, MoviesOption, Movie } from "./moviescss";
import Loading from "./Loading";

export default function Movies() {

    const [movies, setmovies] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
            .then(res => {
                setmovies([...res.data])
            })
    }, [])

    if (movies.length === 0) {
        return (
            <Loading />
        );
    }
    return (
        <MoviesDiv>
            <SectionTitle>Selecione o Filme</SectionTitle>                
            <MoviesOption>  
                {movies.map((movie, index) => (<MovieItem key={index}  id={movie.id} posterURL={movie.posterURL}/>))}                
            </MoviesOption>
        </MoviesDiv>
    );
}

function MovieItem({id, posterURL}) {
    return (
        <Movie>
            <Link to={`/sections/${id}`}>
                <img src={posterURL} alt="imagem do filme" />
            </Link>
        </Movie >
    );
}
