import { getStore } from '../store';

function getUser() {
  return getStore().getState().user.data || {};
}

export function isGuest() {
  return !getUser().id;
}