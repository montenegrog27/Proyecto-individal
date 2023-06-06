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
  const selectedContinent = useSelector((state) => state.filtrado);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // Filtrar países por continente seleccionado
  const filteredCountries = selectedContinent
    ? countries.filter((country) => country.continent === selectedContinent)
    : countries;

  return (
    <>
      {/* <div>
        {filteredCountries.map((country) => (
          <div key={country.id}>{country.name}</div>
        ))}
      </div> */}
      <div className={style.home}>
        <NavBar />
        <Cards
          countries={
            filteredCountries.length > 0 ? filteredCountries : countries
          }
        />{" "}
      </div>
    </>
  );
};

export default Home;
