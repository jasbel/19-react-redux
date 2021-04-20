## teoria 

Link de la docummentacion oficial https://es.redux.js.org/
Link react-redux https://react-redux.js.org/

> npm i react-redux redux

extension chrome DevTools de Redux

## Primera Accion

create en
`src/reducer/authReducer.js`

``` javascript

import {types} from '../types/types';

export const authReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name,
            }
        case types.logout:
            return {}
        default:
            return state
    }
}


```

Create en
`src/types/types.js`

```javascript

export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
}

```

Create en
`src/store/store.js`

```javascript

import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(reducers);

```

Introducir Redux en el componente mas alto posible, en este caso en 
`src/JournalApp.js`
```javascript

//...
import { Provider } from 'react-redux';
import { store } from './store/store';

//...

    <Provider >
         // <AppRouter />
    </Provider>
//..
```

## Segunda Accion

Para ver la devtools , modificar el codigo a  
`src/store/store.js`

```javascript

import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

```

Modificar el archivo 
`src/reducers/authReducer.js`

```javascript

import {types} from '../types/types';

const initialState = {
    uid: 123213,
    name: 'Asbel',
    dir: {
        b: 12,
    }
}

export const authReducer = ( state = initialState , action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name,
            }
        case types.logout:
            return {}
        default:
            return state
    }
}


```

## Tercera Accion - Dispatch en store

<!-- Crear `src/hooks/useForms` -->

Create `src/actions/auth.js`

```javascript

import {types} from '../types/types';

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

```

Cambiar o introducir En:
`src/components/auth/LoginScreen.js`

```javascript

//..
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

//..
const dispatch = useDispatch();

//..
dispatch( login(31231, 'asbel') );

```

## Cuarta Acciones
intalar middleware en nuestro casao usaremo THUNK (O SAGA) son para datos asincronos o llamandas a API.
Update of next code 
`src/store/store.js`

```javascript

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk)
    )
);

```

Update in code, function async
`src/actions/auth.js`

```javascript

import {types} from '../types/types';

// Tarea Asincronaa
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( login(123, 'pedro') );
        }, 3500);
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

```

Cambiar o introducir En:
`src/components/auth/LoginScreen.js`

```javascript

//..
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

//..
const dispatch = useDispatch();

//..
    dispatch( startLoginEmailPassword(31231, 'asbel') );

```

## Quinta Accion - 


En types debemos registra el nuevo types para el reducer de uiReducers
`src/types/types.js`

```javascript

export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',
}

```

Creamos un nuevo reducer en:
`src/reducers/uiReducer.js`

``` javascript

    const initialState = {
        loading: false,
        msgError: null,
    }

    export const uiReducer = ( state = initialState, action) => {

        switch ( action.type ) {
            case types.uiSetError:
                return {
                    ...state,
                    msgError: action.payload
                }
            case types.uiRemoveError:
                return {
                    ...state,
                    msgError: null
                }
        
            default:
                return state;
        }

    }

```


Para realizar el funcionamiento correcto debemos modifica el store para  el nuevo reducer1
`src/store/store.js`

```javascript

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk)
    )
);

```

Creamos un nueva actions de
`src/actions/ui.js`

``` javascript

    import { types } from '../types/types';

    export const setError = ( err ) => ({
        type: types.uiSetError,
        payload: err
    });

    export const removeError = ( ) => ({
        type: types.uiRemoveError,
    })

```