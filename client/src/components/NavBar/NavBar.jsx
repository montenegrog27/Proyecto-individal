import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className={style.barra}>
        <Link to="/" className={style.inicio}>
          Inicio
        </Link>
        <Link to="/actividad" className={style.act}>
          Agregar act
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </>
  );
}

export default NavBar;
