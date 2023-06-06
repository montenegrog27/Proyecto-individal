import style from "./Card.module.css";

function Card(props) {
  const { id, name, flags, continent } = props;
  return (
    <div className={style.div}>
      {<img src={flags} alt={""} className={style.imge} />}
      <h1 className={style.name}> {name}</h1>
      <h1 className={style.continent}> {continent}</h1>
    </div>
  );
}

export default Card;
