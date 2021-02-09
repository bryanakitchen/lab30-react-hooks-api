import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

function CharacterList({ characters }) {
    
  const characterElements = characters.map(character => {
    if(character.url) 

    {
      return (
        <Link to={`/character/${character.id}`} 
          style={{ textDecoration: 'none', color: 'green' }}>
          <li key={character.id} style={{ listStyleType: 'none' }}>
            <Character name={character.name} url={character.url}/>
          </li>
        </Link>
      );
    }

    return;
  });

  return <ul data-testid="characters" >{characterElements}</ul>;
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

