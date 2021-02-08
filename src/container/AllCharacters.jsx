import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterList from '../components/characters/CharacterList';
import Detail from '../components/detail/Detail';

export default class AllCharacters extends Component {
    static propTypes = {
      prop: PropTypes
    }

    render() {
      return (
        <>
          <div>
            Hello from AllCharacters container
          </div>
          <CharacterList />
          <Detail />
        </>
      );
    }
}
