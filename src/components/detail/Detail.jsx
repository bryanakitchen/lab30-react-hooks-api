import React from 'react';
import PropTypes from 'prop-types';

function Detail({ name, url }) {
  return (
    <>
      <figure>
        <img src={url} />
        <figcaption>{name}</figcaption>
      </figure>
        
    </>
  );
}

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Detail;


