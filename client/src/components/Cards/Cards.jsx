import style from "./Cards.module.css";
import Card from "../Card/Card";

function Cards(props) {
  const { countries } = props;
  return (
    <div className={style.componentes}>
      {countries.map((country) => {
        return (
          <Card
            key={country.ID}
            id={country.ID}
            name={country.name}
            flags={country.flags}
            continent={country.continent}
          />
        );
      })}
    </div>
  );
}
export default Cards;
