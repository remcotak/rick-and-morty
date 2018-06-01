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
          <option defaultValue>any</option>
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
  <form styleName="character-filter" onSubmit={props.handleSubmit}>
    {Object.keys(props.filters).map(key => {
      const filter = props.filters[key];
      return (
        <div styleName="character-filter__group" key={key}>
          <label styleName="character-filter__label" htmlFor={key}>
            {filter.label}
          </label>
          {renderInput(key, filter, props.handleInputChange)}
        </div>
      );
    })}
    <button styleName="character-filter__submit" type="submit">
      Filter
    </button>
  </form>
);

export default CharacterFilter;
