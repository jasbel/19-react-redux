import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

/** Provider: englobar todas las variables de redux */
export const JournalApp = () => {
    return (
        <Provider store={ store } >
            <AppRouter />
        </Provider>
    )
}
