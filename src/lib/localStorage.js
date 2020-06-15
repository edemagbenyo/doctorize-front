
export function loadState() {
  try {
    const state = localStorage.getItem('state'); 
    if (!state) return undefined;
    const persistedState = JSON.parse(state);
    return persistedState;
  } catch (error) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const stringfiedState = JSON.stringify(state);
    localStorage.setItem('state', stringfiedState);
  } catch (error) {
    // TODO : log error later
  }
}
