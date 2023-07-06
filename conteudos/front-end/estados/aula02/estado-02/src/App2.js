import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Jeferson");
  const [open, setOpen] = useState("true");
  const [car, setCar] = useState({
    id: 1,
    name: "Corolla",
    color: "Black",
  });
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Movie 1",
      active: false,
    },
    {
      id: 2,
      name: "Movie 2",
      active: true,
    },
    {
      id: 3,
      name: "Movie 3",
      active: false,
    },
    {
      id: 4,
      name: "Movie 4",
      active: true,
    },
    {
      id: 5,
      name: "Movie 5",
      active: false,
    },
    {
      id: 6,
      name: "Movie 6",
      active: true,
    },
  ]);

  function handleFilterOnActive() {
    const onlyActives = movies.filter((movie) => movie.active);
  }
  function handleChangeActives(){
    const localMovies = [...movies];
    localMovies.forEach((movie) => movie.active = true);
    setMovies(localMovies);
  }

  return (
    <div className="App">
      <ul>
        {movies.map((movie) => (
          movie.active && <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
      <button onClick={() => handleFilterOnActive()}>Somente ativos</button>
      <button onClick={() => handleChangeActives()}>
        Ativar todos
      </button>
    </div>
  );
}

export default App;
