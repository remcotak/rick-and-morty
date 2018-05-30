import React from 'react';
import './CharacterFilter.css';

const CharacterFilter = () => (
  <div styleName="character-filter">
    <div styleName="character-filter__group">
      <label styleName="character-filter__label" htmlFor="name">
        Name
      </label>
      <input type="text" name="name" placeholder="Name" />
    </div>
    <div styleName="character-filter__group">
      <label styleName="character-filter__label" htmlFor="status">
        Status
      </label>
      <select name="status" id="">
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
    <div styleName="character-filter__group">
      <label styleName="character-filter__label" htmlFor="species">
        Species
      </label>
      <input type="text" name="species" placeholder="Species" />
    </div>
    <div styleName="character-filter__group">
      <label styleName="character-filter__label" htmlFor="type">
        Type
      </label>
      <input type="text" name="type" placeholder="type" />
    </div>
    <div styleName="character-filter__group">
      <label styleName="character-filter__label" htmlFor="gender">
        Gender
      </label>
      <select name="gender" id="">
        <option value="fegenderless">female</option>
        <option value="male">male</option>
        <option value="male">male</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  </div>
);

export default CharacterFilter;
