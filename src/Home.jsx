import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import { Link } from "react-router-dom"

function Home() {
  const [nome, setNome] = useState(null)
  const Url = "https://www.omdbapi.com/?apikey=28d0dee8&s=" + nome

  const [teste, setTeste] = useState(null)
  console.log(teste)


  const buscarNome = () => {
    axios.get(Url)
      .then((response) => {
        setTeste(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }


  return (
    <>

      <header className="cabecalho">
        <h2 className='titulo'>Api de Filmes</h2>
        </header>
        <br></br>
        <input className="caixa" type='txt' id='nome' placeholder='Nome' onChange={(event) => setNome(event.target.value)}></input>
        <button className="botao" onClick={buscarNome}>
          <span>Buscar</span>
        </button>
      



      <div className='Lista'>
        {teste && teste.Search.map((filme, index) => (
          <div key={index} className='pika'>
            <Link to={`/filme/${filme.imdbID}`}>
              <ul>
             <p>{filme.Title}</p>
              <img src={filme.Poster} className="image" />
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
