import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/fetchAPI';

const AllCharacters = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(newCharacters => setCharacters(newCharacters));
  }, []);

  return (
    <>
      <div>
            Hello from AllCharacters container
      </div>
      <CharacterList characters={characters} />
    </>
  );

};

export default AllCharacters;

// static propTypes = {
//     prop: PropTypes
//   }
