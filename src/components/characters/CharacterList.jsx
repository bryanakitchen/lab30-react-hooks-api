import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function CharacterList({ characters }) {
  
  // destructure?
  const characterElements = characters.map(character => {
    <li key={character._id} >
      <Character name={character.name} url={character.url}/>
    </li>;
  });

  return <ul>{characterElements}</ul>;
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default CharacterList;

