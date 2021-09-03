import { useState, useEffect } from "react";
import axios from "axios";

export default function MoviesSection() {

    const [images, setImages] = useState([]);

useEffect(() => {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

    promise.then(res => {
        setImages([...res.data])
    })
}, [])

    return (
        <div className="movies">
            <h2 className="section-title">Selecione o Filme</h2>
            
              <ul className="movies-option">  {images.map((image) => (
                    <li className="movie" key={image.id}>
                        <img src={image.posterURL} alt="imagem do filme" />
                    </li>
                ))}                
            </ul>
        </div>
    );
}