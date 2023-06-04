import style from "./Detail.module.css";
import { Link } from "react-router-dom";
const Detail = () => {
  return (
    <div className={style.detail}>
      <h1>Esto es el detail</h1>
      <Link to="/home" className={style.volver}>
        VOLVER
      </Link>
    </div>
  );
};

export default Detail;
