export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      url: character.photoUrl,
      allies: character.allies,
      enemies: character.enemies,
      affiliation: character.affiliation
    })));
};
// destructure after verification
