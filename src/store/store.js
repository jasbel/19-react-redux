import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
/** Para trabajar acciones asincronas-middlewares */
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
/**
 * @module Redux
 * Store : Central de la informaacion de los componentes
 */

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

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
