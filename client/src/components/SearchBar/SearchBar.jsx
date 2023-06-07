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
        <div>
          <label className={style.labelSortA} htmlFor="ordenar">
            Orden Alfabetico:
          </label>
          <select
            className={style.selectSortA}
            // onChange={handleContinentSort}
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        <div>
          <label className={style.labelSortP} htmlFor="">
            Orden Poblacion:
          </label>
          <select
            className={style.selectSortP}
            // onChange={handleContinentSort}
          >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>

        <div>
          <label className={style.labelFilter} htmlFor="">
            Filtrar por continente:
          </label>
          <select
            className={style.selectFilter}
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

        <div>
          <label className={style.labelFilterAct} htmlFor="cctividad">
            Filtrar por Actividad:
          </label>
          <select className={style.selectFilterAct}>
            <option value="Actividad">Actividad</option>
          </select>
        </div>

        <div>
          <button className={style.button2}>Borrar Filtros</button>
        </div>
      </div>
      <div className={style.searchBar}>
        <input
          className={style.buscadorInput}
          placeholder="  Ingrese un pais"
          type="text"
        />
        <button className={style.button1}>Buscar</button>
      </div>
    </>
  );
}

export default SearchBar;
