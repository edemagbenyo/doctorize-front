import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../actionTypes';

export const addFlashMessage = message => ({
  type: ADD_FLASH_MESSAGE,
  message,
});
export const removeFlashMessage = id => ({
  type: REMOVE_FLASH_MESSAGE,
  id,
});
