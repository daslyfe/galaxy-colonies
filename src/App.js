import "./css/App.css";
import { addPlayer } from "./scripts/player";

const players = {};

addPlayer("Jade", players);

function App() {
  return <div className="App"></div>;
}

export default App;
