import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, setFilterValue, filterCharacters } from 'actions';
import { CharacterCard, CharacterFilter, Loader } from 'components';
import './Characters.css';

class Characters extends Component {
  constructor(props) {
    super(props);

    this.characterGrid = React.createRef();
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
    // Fetch the next page of characters
    this.props.fetchCharacters();
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

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.props.setFilterValue({ name, value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.filterCharacters();
  };

  render() {
    const characters = this.props.filteredCharacters.length
      ? this.props.filteredCharacters
      : this.props.characters;
    return (
      <Fragment>
        <CharacterFilter
          filters={this.props.filters}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <ul styleName="characters-grid" ref={this.characterGrid}>
          {characters.map(character => (
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
    filteredCharacters: state.characters.filteredCharacters,
    info: state.characters.info,
    filters: state.characters.filters
  }),
  { fetchCharacters, setFilterValue, filterCharacters }
)(Characters);
