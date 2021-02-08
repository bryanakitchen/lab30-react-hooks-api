import React from 'react';
import PropTypes from 'prop-types';

function Detail({ name, url, allies, enemies }) {
  
  const allyList = allies.map((ally, i) => {
    <li key={i}>{ally}</li>;
  });
  
  const enemyList = enemies.map((enemy, i) => {
    <li key={i}>{enemy}</li>;
  });
  
  return (
    <>
      <figure>
        <img src={url} />
        <figcaption>{name}</figcaption>
      </figure>

      { (allyList > 0) &&
      <div>
        <p>Allies</p>
        <ul>{allyList}</ul>
      </div>
      }
      
      <p>Enemies</p>
      <ul>{enemyList}</ul>
    </>
  );
}
// need to confirm i can map through these

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
};

export default Detail;


