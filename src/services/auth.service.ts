const BASE_URL = "https://rickandmortyapi.com/api/";
const characterUrl = BASE_URL + "character/";

export const getMorty = () => {
  return fetch(characterUrl + "2").then((resp) => resp.json());
};
