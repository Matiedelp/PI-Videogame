const axios = require("axios");
const { Genre } = require("../db");

const geners = async () => {
  const api = (
    await axios.get(
      `https://api.rawg.io/api/genres?key=8832286909b344fea6fba9e9f2ba9e0d`
    )
    ).data.results;
  
const generosDb = await Genre.findAll() 
if (!generosDb.length  || generosDb < 19) {
   const SaveGenres = await Genre.bulkCreate(api)
   return SaveGenres
} else {
  return await Genre.findAll()
}


};

module.exports = {
  geners,
};