export const UserProfile = ({ name, email, description, image }) => ({
  type: 'SET_USER',
  payload: {
    name,
    email,
    description,
    image,
  },
});

export const UserLogin = (status, name = '') => ({
  type: 'SET_LOGIN',
  status,
  name,
});

export const AddFavorites = (payload) => ({
  type: 'ADD_FAVORITES',
  payload,
});

export const RemoveFavorites = (payload) => ({
  type: 'REMOVE_FAVORITES',
  payload,
});
