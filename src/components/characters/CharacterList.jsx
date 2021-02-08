import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function CharacterList({ characters }) {
    
  const characterElements = characters.map(character => {
    if(character.url) 

    {
      return (
        <li key={character.id} >
          <Character name={character.name} url={character.url}/>
        </li>
      );
    }

    return;
  });

  return <ul>{characterElements}</ul>;
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  )
};

export default CharacterList;

