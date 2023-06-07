import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const contriesSelect = useSelector((state) => state.filtrado);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  console.log(contriesSelect);

  // Filtrar países por continente seleccionado
  const countriesFiltrado = contriesSelect
    ? countries.filter((country) => country.continent === contriesSelect)
    : countries;

  return (
    <>
      <div className={style.home}>
        <NavBar />
        <Cards
          countries={
            countriesFiltrado.length > 0 ? countriesFiltrado : countries
          }
        />{" "}
      </div>
    </>
  );
};

export default Home;
