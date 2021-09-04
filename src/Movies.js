import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Movies() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
            .then(res => {
                setImages([...res.data])
            })
    }, [])

    return (
        <div className="movies">
            <h2 className="section-title">Selecione o Filme</h2>
                
            <ul className="movies-option">  {images.map(({id, posterURL}) => (
                <li className="movie" key={id}>
                    <Link to={`/sections/${id}`}>
                        <img src={posterURL} alt="imagem do filme" />
                    </Link>
                </li>
                ))}                
            </ul>
        </div>
    );
}