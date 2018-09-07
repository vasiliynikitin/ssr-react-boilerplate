import { apiRequest } from '../../api/api';
import { setProfile } from '../../user/actions';

export function doLogin({ username, password }) {
  return (dispatch) => {
    return apiRequest('login.login', {
      username,
      password,
    })
      .then((data) => {
        dispatch(setProfile(data));
      });
  }
}