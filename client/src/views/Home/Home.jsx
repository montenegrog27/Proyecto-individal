import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.searchResults);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch, searchResults]);

  return (
    <>
      <div className={style.home}>
        <NavBar />
        <Cards
          countries={searchResults.length > 0 ? searchResults : countries}
        />{" "}
      </div>
    </>
  );
};

export default Home;
