/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function SingleDetail({ name, photoUrl, allies, enemies }) {

  const allyElements = allies?.map((ally, i) => {
    return <li key={i}>{ally}</li>;
  });
        
  const enemyElements = enemies?.map((enemy, i) => {
    return <li key={i}>{enemy}</li>;
  });

  return (
    <>
      <figure>
        <img src={photoUrl} />
        <figcaption>{name}</figcaption>
      </figure>
      
      { (allyElements.length > 0)
        && <ul>Allies: {allyElements} </ul>
      }

      { (enemyElements.length > 0)
        && <ul>Enemies: {enemyElements} </ul>
      }
    </>
  );
}

SingleDetail.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
};

export default SingleDetail;

