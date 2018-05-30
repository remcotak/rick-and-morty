import React from 'react';
import './CharacterFilter.css';

const renderInput = (key, filter, onChange) => {
  switch (filter.type) {
    case 'text':
      return (
        <input
          type="text"
          name={key}
          placeholder={filter.placeholder}
          value={filter.value}
          onChange={onChange}
        />
      );
      break;
    case 'select':
      return (
        <select name={key} onChange={onChange} value={filter.value}>
          {filter.options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }
};

const CharacterFilter = props => (
  <div styleName="character-filter">
    {Object.keys(props.filters).map(key => {
      const filter = props.filters[key];
      return (
        <div styleName="character-filter__group" key={key}>
          <label styleName="character-filter__label" htmlFor={key}>
            {filter.label}
          </label>
          {renderInput(key, filter, props.setFilterValue)}
        </div>
      );
    })}
    <button styleName="character-filter__submit" type="button">
      Filter
    </button>
  </div>
);

export default CharacterFilter;
