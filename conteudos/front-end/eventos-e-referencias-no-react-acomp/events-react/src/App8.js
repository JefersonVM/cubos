import "./App.css";
import { useRef } from "react";
import Controls from "./components/Controls";

const musicUrl =
  "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3";

function App() {
  const audioRef = useRef(null);

  return (
    <div className="App">
      <audio src={musicUrl} ref={audioRef} />
      <Controls audioRef={audioRef} />
    </div>
  );
}

export default App;
