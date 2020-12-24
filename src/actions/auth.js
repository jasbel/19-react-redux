
import { types } from '../types/types';
import { firebase, googleAuthProvider} from '../firebase/firebase-config';


/**
 * @module Redux 
 * Actions:  Centro de Acciones de redux, central de metodos
 */

export const startLoginEmailPassword = (email, password)=> {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500);
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
            });
            
    }
}

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
