// Import action types
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  SET_FILTER_VALUE
} from 'actions';

// Set the initialstate so the structure of the store is clear
const initialState = {
  isFetching: false,
  hasError: false,
  characters: [],
  info: {},
  filters: {
    name: {
      value: '',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter name'
    },
    status: {
      value: '',
      type: 'select',
      label: 'Status',
      options: ['any', 'alive', 'dead', 'unknown']
    },
    species: {
      value: '',
      type: 'text',
      label: 'Species',
      placeholder: 'Enter species'
    },
    type: {
      value: '',
      type: 'text',
      label: 'Type',
      placeholder: 'Enter type'
    },
    gender: {
      value: '',
      type: 'select',
      label: 'Gender',
      options: ['any', 'female', 'male', 'genderless', 'unknown']
    }
  }
};

// Characters reducer
const characters = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.data.results],
        info: action.data.info
      };
    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };
    case SET_FILTER_VALUE:
      const input = action.event.target.name;
      const value = action.event.target.value;
      return {
        ...state,
        filters: {
          ...state.filters,
          [input]: {
            ...state.filters[input],
            value
          }
        }
      };
    default:
      return state;
  }
};

export default characters;
