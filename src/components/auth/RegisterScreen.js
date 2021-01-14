import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import Swal from 'sweetalert2';

/**
 * @example
 * {
 *  name: 'Atlas',
 *  email: 'iiotatlas@gmail.com',
 *  pass: '123456',
 *  pass2: '123456',
 * }
 */

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui );

    //userForm
    const [ formValues, handleInputChange ] = useForm({
        name: 'Atlas',
        email: 'iiotatlas@gmail.com',
        password: '123456',
        password2: '123456',

    })
    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
        
    }
    
    /** Validacion de formulario de registro */
    const isFormValid = () => {
        let msgErr = '';

        if( name.trim().length === 0) {
            msgErr = "Name is required";
            Swal.fire("Name", `<p style="color: red">${msgErr}<p>`, 'warning' )
        } else if( !validator.isEmail( email)) {
            msgErr = 'Email is not valid';
            Swal.fire("Email", `<p>${msgErr}<p>`, 'warning' )
        } else if( password !== password2 || password.length < 5 ) {
            msgErr = 'Password incorrecto ';
            Swal.fire("Password", `<p>${msgErr}<p>`, 'warning' )
        }

        if (!!msgErr) {
            dispatch(setError(msgErr));
            return false;
        }

        dispatch(removeError())

        return true;
    }


    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error" >
                            {msgError}
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value = { name }
                    onChange = { handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value = { email }
                    onChange = { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value = { password }
                    onChange = { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value = { password2 }
                    onChange = { handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
