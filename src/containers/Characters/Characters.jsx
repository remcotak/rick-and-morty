import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from 'actions';
import { CharacterCard, CharacterFilter, Loader } from 'components';
import './Characters.css';

class Characters extends Component {
  constructor(props) {
    super(props);

    this.characterGrid = React.createRef();

    this.state = {
      filters: {
        name: '',
        status: '',
        species: '',
        type: '',
        gender: ''
      }
    };
  }

  componentDidMount() {
    // Fetch characters if no characters are present in the store
    if (!this.props.characters.length) {
      this.props.fetchCharacters();
    }
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnMount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  shouldFetchCharacters = () => {
    if (this.props.isFetching) {
      return;
    }
    // Fetch the next page of characters,
    // according to the next url in the info
    this.props.fetchCharacters(this.props.info.next);
  };

  handleScroll = () => {
    // Store the character grid bottom position
    const gridBottom = this.characterGrid.current.getBoundingClientRect()
      .bottom;
    // If the page is at the bottom of the character grid,
    // fetch new characters
    if (gridBottom <= window.innerHeight) {
      this.shouldFetchCharacters();
    }
  };

  render() {
    return (
      <Fragment>
        <CharacterFilter filters={this.state.filters} />
        <ul styleName="characters-grid" ref={this.characterGrid}>
          {this.props.characters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              history={this.props.history}
            />
          ))}
        </ul>
        {this.props.isFetching && <Loader />}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isFetching: state.characters.isFetching,
    characters: state.characters.characters,
    info: state.characters.info
  }),
  { fetchCharacters }
)(Characters);
