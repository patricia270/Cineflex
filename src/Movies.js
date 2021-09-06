import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movies() {

    const [movies, setmovies] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
            .then(res => {
                setmovies([...res.data])
            })
    }, [])

    console.log(movies)
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





const SectionTitle = styled.h2`
    height: 110px;
    font-size: 24px;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const MoviesDiv = styled.div`
    width: 100vw;
    margin-top: 67px;
`;


const MoviesOption = styled.ul`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
`;

const Movie = styled.li`
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