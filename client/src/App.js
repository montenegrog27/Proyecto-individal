import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Actividad from "./views/Actividad/Actividad";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/*" element={<Detail />} />
        <Route path="/actividad" element={<Actividad />} />
      </Routes>
    </div>
  );
}

export default App;
