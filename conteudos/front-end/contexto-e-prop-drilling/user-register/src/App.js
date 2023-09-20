import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserContext from "./contexts/UserContext";
import Main from "./pages/Main";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const valuesProvider = { age, setAge, name, setName };

  return (
    <UserContext.Provider value={valuesProvider}>
      <Header />
      <Main />
    </UserContext.Provider>
  );
}

export default App;
