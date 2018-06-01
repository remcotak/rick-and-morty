import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.css';

const generateRandomRotation = (min = -5, max = 5) => {
  return `${Math.floor(min + Math.random() * (max + 1 - min))}deg`;
};

const renderInformation = (information, key) => {
  const capitalKey = key.replace(
    new RegExp('^' + key[0] + ''),
    key[0].toUpperCase()
  );

  let value = information[key];

  if (key === 'created') {
    const date = new Date(value);
    const monthShort = date.toLocaleString('en-us', {
      month: 'short'
    });
    const dateToString = (date, monthShort) =>
      `${date.getDate()} ${monthShort} ${date.getFullYear()}`;

    value = dateToString(date, monthShort);
  }

  return (
    <div key={key} styleName="information__row">
      <span styleName="information__parameter">{capitalKey}:</span>
      <span styleName="information__data">{value}</span>
    </div>
  );
};

const Character = props => {
  const { name, image, id, status, species, gender, created } = props.character;
  const information = { status, species, gender, created };

  const characterStyle = {
    '--a-rotation': generateRandomRotation()
  };

  return (
    <li styleName="character" style={characterStyle}>
      <Link className={styles.characterLink} to={`character/${id}`}>
        <div styleName="character__header">
          {/* <img src={image} alt={name} styleName="character__image" /> */}
          <div styleName="character__information-overlay">
            <div styleName="character__information">{name}</div>
          </div>
        </div>
        <div styleName="information">
          {Object.keys(information).map(key =>
            renderInformation(information, key)
          )}
        </div>
      </Link>
    </li>
  );
};

export default Character;
