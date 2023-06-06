import style from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={style.searchBar}>
      <input
        className={style.barra}
        placeholder="  Ingrese un pais"
        type="text"
      />
      <button className={style.button1}>Buscar</button>
    </div>
  );
}

export default SearchBar;
