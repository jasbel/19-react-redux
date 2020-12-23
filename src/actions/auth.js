
import { types } from '../types/types'
/**
 * @module Redux 
 * Acciones de redux para autenticacion
 */

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})