import React, { useState } from "react";
import style from "./Cards.module.css";
import Card from "../Card/Card";

function Cards(props) {
  const { countries } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const irAPagina = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const siguientePag = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const anteriorPag = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  let pageNumbers = [];
  if (totalPages <= 3) {
    // Si hay 3 o menos páginas, mostramos todas
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    // Si hay más de 3 páginas, mostramos la página anterior, actual y siguiente
    pageNumbers = [currentPage - 1, currentPage, currentPage + 1];
  }

  return (
    <>
      <div className={style.pagination}>
        {currentPage > 1 && (
          <button onClick={anteriorPag} className={style.prevButton}>
            Anterior
          </button>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => irAPagina(page)}
            className={`${style.pageButton} ${
              page === currentPage ? style.active : ""
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button onClick={siguientePag} className={style.nextButton}>
            Siguiente
          </button>
        )}
      </div>

      <div className={style.componentes}>
        {countries
          .slice(
            (currentPage - 1) * countriesPerPage,
            currentPage * countriesPerPage
          )
          .map((country) => (
            <Card
              key={country.ID}
              id={country.ID}
              name={country.name}
              flags={country.flags}
              continent={country.continent}
            />
          ))}
      </div>
    </>
  );
}

export default Cards;
