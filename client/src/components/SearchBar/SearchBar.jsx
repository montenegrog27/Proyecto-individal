import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchCountries, sortCountries } from "../../redux/actions"; // Añade la acción para ordenar

function SearchBar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState("A-Z"); // Estado para el orden alfabético
  const [sortPopulation, setSortPopulation] = useState("Ascendente"); // Estado para el orden por población

  const handleSearch = () => {
    dispatch(searchCountries(searchQuery));
  };

  const handleSortAlphabetically = (e) => {
    setSortAlphabetically(e.target.value);
    dispatch(sortCountries(sortAlphabetically, sortPopulation)); // Dispatch la acción de ordenar
  };

  const handleSortPopulation = (e) => {
    setSortPopulation(e.target.value);
    dispatch(sortCountries(sortAlphabetically, sortPopulation)); // Dispatch la acción de ordenar
  };

  return (
    <>
      <div className={style.barraFiltros}>
        <div>
          <label className={style.labelSortA} htmlFor="ordenar">
            Orden Alfabético:
          </label>
          <select
            className={style.selectSortA}
            value={sortAlphabetically}
            onChange={handleSortAlphabetically}
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        <div>
          <label className={style.labelSortP} htmlFor="">
            Orden Población:
          </label>
          <select
            className={style.selectSortP}
            value={sortPopulation}
            onChange={handleSortPopulation}
          >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>

        <div>
          <label className={style.labelFilter} htmlFor="">
            Filtrar por continente:
          </label>
          <select className={style.selectFilter} id="continent">
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
          placeholder="  Ingrese un país"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={style.button1} onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </>
  );
}

export default SearchBar;
