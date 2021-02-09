import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailTemplate from '../components/detail/DetailTemplate';
import { getCharacterDetail } from '../services/fetchAPI';

const Detail = () =>  {

  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getCharacterDetail(id)
      .then(newCharacter => {
        setCharacter(newCharacter);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <DetailTemplate {...character} />
    </>
  );
};

export default Detail;


