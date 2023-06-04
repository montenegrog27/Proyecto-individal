import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.landing}>
      <Link to="/home" className={style.ingresar}>
        INGRESAR
      </Link>
    </div>
  );
};

export default Landing;
