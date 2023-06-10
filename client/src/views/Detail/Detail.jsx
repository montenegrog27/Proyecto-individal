import style from "./Detail.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [country, setCountry] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  useEffect(() => {
    fetch(`http://localhost:3001/countries?name=${name}`)
      .then((response) => {
        const resp = response.json();
        return resp;
      })
      .then((coun) => {
        // console.log(coun);
        if (coun) {
          setCountry(coun[0]);
          console.log(coun[0]);
        } else {
          window.alert("No hay paises");
        }
      })
      .catch((err) => {
        window.alert("No hay paisessss");
      });
    return setCountry([]);
  }, []);

  return (
    <div className={style.detail}>
      <div>
        <img className={style.flags} src={country.flags} alt="imagen" />
      </div>

      <div className={style.name}>{country.name}</div>

      <div className={style.continent}>{country.continent}</div>

      <div className={style.activities}>
        {Array.isArray(country.Activities) && country.Activities.length > 0 ? (
          country.Activities.map((activity) => (
            <div key={activity.name}>
              <h3>{activity.name}</h3>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration}</p>
              <p>Season: {activity.season}</p>
            </div>
          ))
        ) : (
          <p>No hay actividades disponibles</p>
        )}
      </div>

      <Link to="/home" className={style.volver}>
        VOLVER
      </Link>
    </div>
  );
};

export default Detail;
