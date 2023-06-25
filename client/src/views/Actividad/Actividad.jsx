import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Actividad.module.css";

function ActivityForm() {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
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
        // Realizar acciones adicionales después de guardar la actividad
      })
      .catch((error) => {
        console.error("Ocurrió un error al guardar la actividad:", error);
        // Manejar el error de forma adecuada
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
    <form className={style.activityForm} onSubmit={submitHandler}>
      <h2>Nueva Actividad</h2>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="difficulty">Dificultad:</label>
        <input
          type="number"
          id="difficulty"
          name="difficulty"
          min="1"
          max="5"
          value={form.difficulty}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="duration">duracion:</label>
        <input
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
        {/* <label htmlFor="season">Season:</label> */}
        <select
          // id="season"
          // value={form.season}
          onChange={handleChangeSeason}
          // required
        >
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
      </div>

      <select
        className=""
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
            <div className="" key={country}>
              <p>{country}</p>
              <button className="" onClick={deleteCountry} value={country}>
                {" "}
                X{" "}
              </button>
            </div>
          );
        })}
      </div>
      {console.log(form)}

      <button type="submit">Guardar</button>
    </form>
  );
}

export default ActivityForm;
