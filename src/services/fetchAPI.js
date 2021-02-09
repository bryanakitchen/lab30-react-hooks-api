export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      url: character.photoUrl,
    })));
};
// destructure after verification

export const getCharacterDetail = (id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());

};
