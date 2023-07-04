import "./App.css";
import { useRef } from "react";
function App() {
  const movies = [
    {
      name: "Ação Explosiva",
      id: 1,
    },
    {
      name: "Aventuras Submarinas",
      id: 2,
    },
    {
      name: "O Mistério do Relógio Antigo",
      id: 3,
    },
    {
      name: "O Tesouro Perdido",
      id: 4,
    },
    {
      name: "A Herança Maldita",
      id: 5,
    },
    {
      name: "A Chave Secreta",
      id: 6,
    },
    {
      name: "A Joia do Nilo",
      id: 7,
    },
    {
      name: "O Enigma do Códice",
      id: 8,
    },
    {
      name: "A Lenda do Anel",
      id: 9,
    },
    {
      name: "A Busca pelo Santo Graal",
      id: 10,
    },
  ];

  const inputRef = useRef(null);

  function searchMovie() {
    if (!inputRef.current.value.trim) {
      return;
    }
    const moviesLI = document.querySelectorAll('li');

    for (const movie of moviesLI) {

      if (movie.textContent.toLocaleLowerCase().includes(inputRef.current.value.toLocaleLowerCase())){
        movie.style.display = "block";
        continue;
      }
      movie.style.display = "none"; 
    }
  }

  function clearSearch(){
    const moviesLI = document.querySelectorAll('li');
    for (const movie of moviesLI) {
      movie.style.display = "block";
    }

    inputRef.current.value = "";
  }

  return (
    <div className="container">
      <div>
        <input type="text" placeholder="Buscar" ref={inputRef} />
        <button onClick={() => searchMovie()}>Buscar</button>
        <button onClick={clearSearch}>Limpar</button>
      </div>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
