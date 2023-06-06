import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <NavBar />
      <Cards countries={countries} />
    </div>
  );
};

export default Home;
