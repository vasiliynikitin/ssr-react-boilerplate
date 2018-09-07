import { answer } from './mockUtils';

const USER = {
  id: 1,
  name: 'username',
};
const GUEST = {
  id: 0,
  role: 'guest',
};

let curUser = GUEST;

function profile() {
  return answer(curUser);
}

function logout() {
  curUser = GUEST;
  return answer({});
}

function login({ username, password }) {
  if (username === 'username' && password === 'password') {
    curUser = USER;
    return profile();
  }
  return answer({ error: 'invalid pass or name' }, true);
}

export default {
  'user.profile': profile,
  'login.login': login,
  'user.logout': logout,
};
