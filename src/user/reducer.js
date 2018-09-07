import types from './actions';

const initialState = {
  data: null,
};

export default function userReducer(state = initialState, { type, data, error}) {
  switch (type) {
    case types.RESET:
      return initialState;
    case types.SET:
      return Object.assign({}, state, { data });
    default:
      return state;
  }
}
