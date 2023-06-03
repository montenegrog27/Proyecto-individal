const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true, // Validar que sea un número
        min: 1, // Valor mínimo permitido
        max: 5, // Valor máximo permitido
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true, // Validar que sea un número
        min: 1, // Valor mínimo permitido
      },
    },
    season: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
      allowNull: false,
    },
  });
};
