import { types } from "../types/types";
/**
 * @module Redux
 * @function authReducer
 * @param state Estado actual, minimamente colocar {}
 * @param action Los valores que se envia como ser payload
 * @example
 * {
 *  uid: 'asdfsdaflkjklfsdafsdaf',
 *  name: 'Fernando'
 * }
 */

export const authReducer = (state = {}, action) => {

  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
