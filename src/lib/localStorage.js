import Cookies from 'js-cookie';

export function loadState() {
  try {
    const state = Cookies.get('state');
    const persistedState = JSON.parse(state);
    return persistedState;
  } catch (error) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const stringfiedState = JSON.stringify(state);
    Cookies.set('state', stringfiedState);
  } catch (error) {
    // TODO : log error later
  }
}
