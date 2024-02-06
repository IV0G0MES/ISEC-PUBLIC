import "./assets/styles/App.css";
import {
  Header,
  Footer,
  ControlPanel,
  GamePanel,
  GameOverModal,
} from "./components";

function App() {
  return (
    <div id="container">
      <Header />
      <ControlPanel />
      <GamePanel />
      <Footer />
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida
// export default function App() {
