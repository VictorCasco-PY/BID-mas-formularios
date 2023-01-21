import React, { useState } from 'react';
import "../App.css";

 const UserForm = () => {
    const initValues = {
        username : {value: '', error: ''},
        lastname : {value: '', error: ''},
        email : {value: '', error: ''},
        password : {value: '', error: ''},
        confirmPassword : {value: '', error: ''}
    };

    const [data, setData] = useState(initValues);
    const {username , lastname, email, password, confirmPassword} = data;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleInputs = (e) => {
          setData({
          ...data,
          [e.target.name] : { valor:e.target.value, error:'' },
      });    
    };

    const handleInputError = (e) => {
        handleInputs(e);

        if((e.target.type === 'text') && (e.target.value.length < 3)){
            setData({
                ...data,
                [e.target.name] : {value: e.target.value, error: 'This field must be at least 2 characters'}
            });
        }else if((e.target.type === 'email') && (e.target.value.length < 6)){
            setData({
                ...data,
                [e.target.name] : {value: e.target.value, error: 'This field must be at least 5 characters'}
            });
        }else if((e.target.type === 'password') && (e.target.value.length < 9)){
            setData({
                ...data,
                [e.target.name] : {value: e.target.value, error: 'This field must be at least 8 characters'}
            });
        }
    };

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            username: username.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        };
        console.log("Welcome ", newUser);
        setHasBeenSubmitted(true);
    };

    const clear = () => setData(initValues);
    return(
        <form onSubmit={ createUser }>
            { hasBeenSubmitted 
                ?
                <h3>Thanks, form submited</h3>
                :
                <h3>Welcome, please send your form</h3>
            }
            <div className='div-inputs'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={ handleInputError } value={username.value} />
            </div>
            { username.error && <p>{ username.error }</p>}
            <div className='div-inputs'>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" onChange={ handleInputError } value={lastname.value} />
            </div>
            { lastname.error && <p>{ lastname.error }</p>}
            <div className='div-inputs'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={ handleInputError } value={email.value} />
            </div>
            { email.error && <p>{email.error}</p> }
            <div className='div-inputs'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={ handleInputError } value={password.value} />
            </div>
            { password.error && <p>{password.error}</p> }
            <div className='div-inputs'>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="password" name="confirmPassword" onChange={ handleInputError } value={confirmPassword.value} />
            </div>
            { confirmPassword.error && <p>{confirmPassword.error}</p> }
            <div className="div-inputs">
                <input type="submit" value="Submit" className='btn' />
                <input type="button" value="Clear" onClick={ clear } className='btn' />
            </div>
        </form>

    );
}

export default UserForm;