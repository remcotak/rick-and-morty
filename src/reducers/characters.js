// Import action types
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from 'actions';

// Set the initialstate so the structure of the store is clear
const initialState = {
  isFetching: false,
  hasError: false,
  characters: [],
  info: {}
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
    default:
      return state;
  }
};

export default characters;
