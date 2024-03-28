import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom"

function Filmes() {
    const url = "https://www.omdbapi.com/?apikey=28d0dee8&i=";
    const { imdbID } = useParams();
    const [filme, setFilme] = useState(null);



    const procura = () => {
        axios.get(url + imdbID)
            .then((resposta) => {
                setFilme(resposta.data);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }



    useEffect(() => {
        procura();
    });

    if (!filme) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='achado'>

            <button>
                <Link to={`/`}>Voltar
                </Link>
            </button>


            <h1 className="titulo">Info: {filme.Title}</h1>
            <img src={filme.Poster} alt={filme.Title} className="image" />
            <p>Ano de lançamento: {filme.Year}</p>
            <p>Diretor: {filme.Director}</p>
            <p>Gênero: {filme.Genre}</p>
            <p>Classificação: {filme.Rated}</p>
            <p>Enredo: {filme.Plot}</p>
        </div>
    );
}

export default Filmes;
