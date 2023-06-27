import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Actividad.module.css";
import { Link } from "react-router-dom";

function ActivityForm() {
  const [form, setForm] = useState({
    name: "",
    difficulty: 1,
    duration: "",
    season: "",
    countries: [],
  });

  const [selected, setSelected] = useState();

  const TodosCountries = useSelector((state) => state.countries);
  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  function submitHandler(event) {
    event.preventDefault();

    fetch("http://localhost:3001/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Actividad guardada:", data);
        window.alert("La actividad se creó correctamente.");
      })
      .catch((error) => {
        console.log("Ocurrió un error al guardar la actividad:", error);
        window.alert("Ocurrió un error al guardar la actividad.");
      });
  }
  const handleChangeSeason = (event) => {
    setForm({ ...form, season: event.target.value });
  };

  const handleCountries = (event) => {
    if (
      event.target.value !== "Select Country" &&
      !form.countries.includes(event.target.value)
    ) {
      setForm({
        ...form,
        countries: [...form.countries, event.target.value],
      });
      // setErrors(validation({
      //     ...form,
      //     countries: [...form.countries, event.target.value]
      // }))
    }
  };

  const deleteCountry = (event) => {
    setForm({
      ...form,
      countries: form.countries.filter(
        (country) => country !== event.target.value
      ),
    });
    // setErrors(validation({
    //     ...form,
    //     countries: form.countries.filter((country) => country !== event.target.value)
    // }))
  };

  return (
    <>
      <Link to="/home" className={style.volver}>
        Home
      </Link>
      <form className={style.activityForm} onSubmit={submitHandler}>
        <h2 className={style.h2}>Nueva Actividad</h2>
        <div>
          <label className={style.name} htmlFor="name">
            Nombre:
          </label>
          <input
            className={style.name2}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className={style.difficulty} htmlFor="difficulty">
            Dificultad:
          </label>
          <input
            className={style.difficultyInput}
            type="range"
            id="difficulty"
            name="difficulty"
            min="1"
            max="5"
            value={form.difficulty}
            onChange={handleChange}
          />
        </div>

        <div className={style.button}>
          <label className={style.duration} htmlFor="duration">
            Duracion:
          </label>
          <input
            className={style.durationInput}
            type="number"
            name="duration"
            min="1"
            max="5"
            id="duration"
            value={form.duration}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label className={style.season} htmlFor="season">
            Estacion:
          </label>
          <select className={style.seasonInput} onChange={handleChangeSeason}>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </div>

        <label className={style.countries} htmlFor="season">
          Paises:
        </label>
        <select
          className={style.countriesInput}
          value={selected}
          onChange={(event) => [handleCountries(event), setSelected(event)]}
        >
          <option>Select Country</option>
          {TodosCountries?.map((country) => {
            return <option key={country.name}>{country.name}</option>;
          })}
        </select>
        <div>
          {form.countries.map((country) => {
            return (
              <div key={country}>
                <p>{country}</p>
                <button onClick={deleteCountry} value={country}>
                  {" "}
                  X{" "}
                </button>
              </div>
            );
          })}
        </div>

        <button className={style.button1} type="submit">
          Agregar Actividad
        </button>
      </form>
    </>
  );
}

export default ActivityForm;
