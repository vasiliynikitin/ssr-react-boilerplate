import { apiRequest } from '../api/api';

const types = {
  SET: 'profile/set',
  RESET: 'profile/reset',
};

function isNetworkError(err) {
  return err.message === 'Failed to fetch';
}

export function logout() {
  return (dispatch) => {
    apiRequest('user.logout')
      .then(data => {
        dispatch({ type: types.RESET });
        dispatch(setProfile({id: 0}));
      })
      .catch(err => {
        // dispatch({ type: types.LOGIN_FAILED });
      });
  }
}

export function setProfile(data) {
  return {
    type: types.SET,
    data,
  };
}

export function getProfile() {
  return (dispatch, getState) => {
    return apiRequest('user.profile')
      .catch(err => {
        if (!getState().user.data && isNetworkError(err)) {
          return null;
        }
        return { id: 0 };
      })
      .then(data => dispatch(setProfile(data)))
  }
}

export default types;