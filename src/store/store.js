import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
/** Para trabajar acciones asincronas-middlewares */
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
/**
 * @module Redux
 * Store : Central de la informacion de los componentes
 */

 /** Extension de redux para chrome y compose para trabajar con middlewares */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/** Englobar los reducers en esta variable */
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
