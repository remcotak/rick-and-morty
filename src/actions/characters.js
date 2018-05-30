import fetch from 'isomorphic-fetch';

// Action types
export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';

// Action creators
export const fetchCharactersRequest = () => {
  return { type: FETCH_CHARACTERS_REQUEST };
};

export const fetchCharactersSuccess = data => {
  return { type: FETCH_CHARACTERS_SUCCESS, data };
};

export const fetchCharactersError = error => {
  return { type: FETCH_CHARACTERS_ERROR, error };
};

export const fetchCharacters = (
  url = 'https://rickandmortyapi.com/api/character/'
) => {
  // Pass the dispatch method as an argument to the function,
  // so its able to dispatch actions itself.
  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(fetchCharactersRequest());

    // Return a promise to wait for.
    return fetch(url)
      .then(
        response => response.json(),
        error => dispatch(fetchCharactersError(error))
      )
      .then(json =>
        // Update the app's state with the results of the API call.
        dispatch(fetchCharactersSuccess(json))
      );
  };
};

export const setFilterValue = event => {
  return { type: SET_FILTER_VALUE, event };
};
