import style from "./SearchBar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { continentFilter } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();

  const countryFiltrada = useSelector((state) => state.filtrado);

  const handleContinentChange = (e) => {
    dispatch(continentFilter(e.target.value));
  };

  return (
    <>
      <div className={style.barraFiltros}>
        <label className={style.label} htmlFor="continent">
          Filtrar por continente:
        </label>
        <select
          className={style.select}
          id="continent"
          value={countryFiltrada}
          onChange={handleContinentChange}
        >
          <option value="">Todos</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className={style.searchBar}>
        <input
          className={style.barra}
          placeholder="  Ingrese un pais"
          type="text"
        />
        <button className={style.button1}>Buscar</button>
      </div>
    </>
  );
}

export default SearchBar;
