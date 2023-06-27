import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchCountries } from "../../redux/actions"; // Añade la acción para ordenar
import { sortCountriesAlf } from "../../redux/actions";
import { sortCountriesPopulation } from "../../redux/actions";
import { borrarTodo } from "../../redux/actions";
import { filterByContinent } from "../../redux/actions";
import { useSelector } from "react-redux";
import { filterByActivity } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const noencontrado = useSelector((state) => state.noResultsFound);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [OrdenamientoAlf, setOrdenamientoAlf] = useState("");
  const [OrdenamientoPopu, setOrdenamientoPopu] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");

  const handleActivityChange = (e) => {
    const activity = e.target.value;
    setSelectedActivity(activity);
    dispatch(filterByActivity(activity));
  };

  const handleContinentChange = (e) => {
    const continent = e.target.value;
    setSelectedContinent(continent);
    dispatch(filterByContinent(continent));
  };

  const handleSearch = () => {
    dispatch(searchCountries(searchQuery));
    dispatch(sortCountriesAlf("A-Z")); // Ordenar alfabéticamente por defecto
    if (noencontrado) {
      window.alert("No se encontro Pais!");
    }
  };

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    setOrdenamientoAlf(sortType);
    dispatch(sortCountriesAlf(sortType));
  };

  const handleSortChangePopu = (e) => {
    const sortPopu = e.target.value;
    setOrdenamientoPopu(sortPopu);

    dispatch(sortCountriesPopulation(sortPopu));
  };

  //limpiar busqeuda
  const limpiarBusqueda = () => {
    setSearchQuery("");
    setSelectedContinent("");
    setOrdenamientoAlf("");
    setOrdenamientoPopu("");
  };
  const borrado = () => {
    dispatch(borrarTodo());
    limpiarBusqueda();
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
            onChange={handleSortChange}
            value={OrdenamientoAlf}
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
            onChange={handleSortChangePopu}
            value={OrdenamientoPopu}
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
            value={selectedContinent}
            onChange={handleContinentChange}
          >
            {" "}
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
          <select
            className={style.selectFilterAct}
            id="continent"
            value={selectedContinent}
            onChange={handleContinentChange}
          >
            <option value="Surf">Surf</option>
            <option value="Escalar">Escalar</option>
            <option value="Correr">Correr</option>
            <option value="Sky">Sky</option>
            <option value="Snowboard">Snowboard</option>
          </select>
        </div>
        <div>
          <button className={style.button2} onClick={borrado}>
            Borrar Filtros
          </button>
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
