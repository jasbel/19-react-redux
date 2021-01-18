
import { types } from '../types/types';
import { firebase, googleAuthProvider} from '../firebase/firebase-config';
import { startLoading, finishLoading } from './ui';
import Swal from 'sweetalert2';


/**
 * @module Redux 
 * Actions:  Centro de Acciones de redux, central de metodos
 */

export const startLoginEmailPassword = (email, password)=> {
    return (dispatch) => {

        dispatch(startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({user}) => {

                dispatch(
                    login( user.uid, user.displayName )
                );

                dispatch(finishLoading() );
            } )
            .catch( (e) => {
                console.error(e);
                dispatch(finishLoading() );
                /** notidicacion de error */
                Swal.fire("Fail", e.message, 'error')
            });

    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({user}) => {

                await user.updateProfile({
                    displayName: name,
                })

                dispatch(
                    login( user.uid, user.displayName )
                )
            } )
            .catch( (e) => {
                console.error(e);
                Swal.fire("Fail", e.message, 'error')
            });
    }
}

/** Loguearse con google */
export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then( userCred => {
                console.log(userCred);
            })
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout
})


