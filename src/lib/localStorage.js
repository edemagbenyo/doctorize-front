import Cookies from 'js-cookie';
export const loadState = function(){
  try {
    const state = Cookies.get('state')
    const persistedState =  JSON.parse(state);
    return persistedState;
  } catch (error) {
    return undefined;
  }
}

export const saveState =  function(state){
  try {
    const stringfiedState =  JSON.stringify(state);
    Cookies.set('state', stringfiedState);
    
  } catch (error) {
    //TODO : log error later
  }
}