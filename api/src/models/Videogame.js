const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    background_image: {
      type: DataTypes.STRING,
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.BOOLEAN,
    },
  });
};
