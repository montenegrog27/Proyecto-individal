import style from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { name, flags, continent } = props;
  return (
    <div className={style.div}>
      <Link to={`/countries?name=${name}`}>
        {<img src={flags} alt={""} className={style.imge} />}
      </Link>
      <h1 className={style.name}> {name}</h1>
      <h1 className={style.continent}> {continent}</h1>
    </div>
  );
}

export default Card;
