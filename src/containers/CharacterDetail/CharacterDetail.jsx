import React, { Component } from 'react';

class CharacterDetail extends Component {
  render() {
    console.log(console.log(window.innerHeight));
    return <p>Id : {this.props.match.params.characterId}</p>;
  }
}

export default CharacterDetail;
