const initialState = {
  name: '',
  email: '',
  image: '',
  description: '',
  logged: false,
  favoriteSongs: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_USER':
    return {
      ...state,
      ...action.payload,
    };
  case 'SET_LOGIN':
    return {
      ...state,
      logged: action.status,
      name: action.name,
    };

  case 'ADD_FAVORITES':
    return {
      ...state,
      favoriteSongs: [...state.favoriteSongs, action.payload],
    };

  case 'REMOVE_FAVORITES':
    return {
      ...state,
      favoriteSongs: state.favoriteSongs.filter((e) => e.trackId !== action.payload),
    };

  default:
    return state;
  }
};

export default user;
