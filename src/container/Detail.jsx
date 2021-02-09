import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import DetailTemplate from '../components/detail/DetailTemplate';
import { getCharacterDetail } from '../services/fetchAPI';

const Detail = ({ match }) =>  {

  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterDetail(match.params.id)
      .then(newCharacter => {
        setCharacter(newCharacter);
        setLoading(false);
      });
  }, []);
  
  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <DetailTemplate {...character} />
    </>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Detail;
