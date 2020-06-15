import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from "../actionTypes";

export const addFlashMessage = (message) => (dispatch) => {
  console.log("show me message")
  dispatch({
    type: ADD_FLASH_MESSAGE,
    message,
  });
};
export const removeFlashMessage = (id) => {
  return {
    type: REMOVE_FLASH_MESSAGE,
    id,
  };
};
