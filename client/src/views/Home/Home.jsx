import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../redux/actions";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.searchResults);
  const countries = useSelector((state) => state.countries);
  const ordenamiento = useSelector((state) => state.ordenamiento);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  let renderedCountries;
  if (searchResults.length > 0) {
    renderedCountries = searchResults;
  } else if (ordenamiento.length > 0) {
    renderedCountries = ordenamiento;
  } else {
    renderedCountries = countries;
  }

  return (
    <>
      <div className={style.home}>
        <NavBar />
        <Cards countries={renderedCountries} />
      </div>
    </>
  );
};

export default Home;

//Nadar
// Cabalgar
// Correr
// Escalar
// Bucear
// Ciclismo
// Surf
// Esquiar
// Practicar yoga
// Bailar
