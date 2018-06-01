// Import action types
import {
  FETCH_REQUEST,
  FETCH_ERROR,
  FETCH_CHARACTERS_SUCCESS,
  SET_FILTER_VALUE,
  FILTER_CHARACTERS_SUCCESS,
  CLEAR_FILTERED_CHARACTERS
} from 'actions';

// Set the initialstate so the structure of the store is clear
const initialState = {
  isFetching: false,
  hasError: false,
  characters: [],
  filteredCharacters: [],
  filtered: false,
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
      options: ['alive', 'dead', 'unknown']
    },
    species: {
      value: '',
      type: 'text',
      label: 'Species',
      placeholder: 'Enter species'
    },
    // type: {
    //   value: '',
    //   type: 'text',
    //   label: 'Type',
    //   placeholder: 'Enter type'
    // },
    gender: {
      value: '',
      type: 'select',
      label: 'Gender',
      options: ['female', 'male', 'genderless', 'unknown']
    }
  }
};

// Characters reducer
const characters = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.data.results],
        info: action.data.info
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.data.name]: {
            ...state.filters[action.data.name],
            value: action.data.value
          }
        }
      };
    case FILTER_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        filteredCharacters: [
          ...state.filteredCharacters,
          ...action.data.results
        ],
        filtered: true,
        info: action.data.info
      };
    case CLEAR_FILTERED_CHARACTERS:
      return {
        ...state,
        filteredCharacters: []
      };
      return;
    default:
      return state;
  }
};

export default characters;
