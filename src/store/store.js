import { createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';
/**
 * @module Redux
 * Store : Necesario para redux
 */

const reducers = combineReducers({
    auth: authReducer,
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
