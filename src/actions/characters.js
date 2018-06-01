import fetch from 'isomorphic-fetch';

// Action types
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
export const FILTER_CHARACTERS_SUCCESS = 'FILTER_CHARACTERS_SUCCESS';
export const CLEAR_FILTERED_CHARACTERS = 'CLEAR_FILTERED_CHARACTERS';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

// Action creators
// Global fetch actions
export const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
export const fetchError = error => {
  return { type: FETCH_ERROR, error };
};

// Fetch characters actions
export const fetchCharactersSuccess = data => {
  return { type: FETCH_CHARACTERS_SUCCESS, data };
};

// Filter characters actions
export const setFilterValue = data => {
  return { type: SET_FILTER_VALUE, data };
};
export const clearFilteredCharacters = () => {
  return { type: CLEAR_FILTERED_CHARACTERS };
};
export const filterCharactersSuccess = data => {
  return { type: FILTER_CHARACTERS_SUCCESS, data };
};

const shouldFetch = state => {
  const info = state.characters.info;
  if (info.pages === 1) {
    return false;
  }
  if (Object.keys(info).length && !info.next && info.prev) {
    return false;
  }
  return true;
};

// Fetch characters
export const fetchCharacters = () => {
  // Pass the dispatch method as an argument to the function,
  // so its able to dispatch actions itself.
  return (dispatch, getState) => {
    const state = getState();
    if (!shouldFetch(state)) {
      return;
    }
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(fetchRequest());
    // Set the url to fetch,
    // If no next page url is given, fetch page base url
    const url = state.characters.info.next || baseUrl;
    // Return a promise to wait for.
    return fetch(url)
      .then(response => response.json(), error => dispatch(fetchError(error)))
      .then(json => {
        // Update the app's state with the results of the API call.
        // Based if characters are filtered or not
        if (state.characters.filtered) {
          dispatch(filterCharactersSuccess(json));
        } else {
          dispatch(fetchCharactersSuccess(json));
        }
      });
  };
};

// Set url with the prodived filters as parameters
const setUrlParameters = filters => {
  // Filter out the empty values
  const keys = Object.keys(filters).filter(key => filters[key].value !== '');
  // Reduce the filter values to a single parameters string
  const parameters = keys.reduce((newValue, currentKey, index) => {
    const value = filters[currentKey].value;
    // On the last index, leave out the '&'
    if (index === keys.length - 1) {
      return newValue + `${currentKey}=${encodeURIComponent(value)}`;
    }
    return newValue + `${currentKey}=${encodeURIComponent(value)}&`;
  }, '');
  // Return the base url with the parameters
  return `${baseUrl}?${parameters}`;
};

// Fetch filtered characters
export const filterCharacters = () => {
  return (dispatch, getState) => {
    // Clear the current filtered characters array
    dispatch(clearFilteredCharacters());
    dispatch(fetchRequest());
    // Set the correct url for filtering
    const url = setUrlParameters(getState().characters.filters);
    return fetch(url)
      .then(response => response.json(), error => dispatch(fetchError(error)))
      .then(json => dispatch(filterCharactersSuccess(json)));
  };
};
