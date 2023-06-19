import React, { useState } from "react";
import style from "./Actividad.module.css";

function ActivityForm() {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });

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
        <label htmlFor="season">Season:</label>
        <select
          id="season"
          value={form.season}
          onChange={handleChange}
          required
        >
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
      </div>

      <div>
        <label htmlFor="countries">paises:</label>
        <input
          type="text"
          name="countries"
          id="countries"
          value={form.countries}
          onChange={handleChange}
        ></input>
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
}

export default ActivityForm;
