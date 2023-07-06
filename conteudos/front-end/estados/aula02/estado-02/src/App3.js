import { useState } from "react";
import "./App.css";

function App() {
  const [car, setCar] = useState({
    id: 1,
    name: "Corolla",
    color: "Black",
    year: 2021,
  });

  function handleChangeYear(year) {
    setCar({...car, year: year});
  }


  function handleChangeHonda(name) {
    setCar({id: 2, name: 'Honda Civic', color: 'Gray', year: 2022 });
  }

  return (
    <div className="App">
      <h1>{car.name}</h1>
      <h1>{car.color}</h1>
      <h1>{car.year}</h1>

      <button onClick={() => handleChangeYear(2019)}>2019</button>
      <button onClick={() => handleChangeYear(2020)}>2020</button>
      <button onClick={() => handleChangeYear(2021)}>2021</button>
      <button onClick={() => handleChangeYear(2022)}>2022</button>
      <button onClick={() => handleChangeHonda()}>Trocar para Honda Civic</button>
    </div>
  );
}

export default App;
