import Main from "./pages/Main";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Header name={name} />
      <Main name={name} setName={setName} />
    </>
  );
}

export default App;
