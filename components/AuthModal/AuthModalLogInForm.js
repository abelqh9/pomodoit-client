import React, { useState } from 'react'
import { useDBContext } from '../../contexts/DBContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { getNewUserDataForANewDay } from '../../functions/getNewUserDataForANewDay';
import { itsADifferentDay } from '../../helpers/itsADifferentDay';
import ModalButton from '../Modal/ModalButton';
import AuthModalForm from './AuthModalForm';
import AuthModalInput from './AuthModalInput';

function LogInForm(props) {

    const { setUserData } = useDBContext(); 
    const { appTexts } = UseTextsContext();

    const { closeModal } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const componentTexts = appTexts.header.AuthenticationModal;

    async function logInHandler(setError) {
        setError("");

        if (!email) {return setError(componentTexts.noEmailError)}
        if (!password) {return setError(componentTexts.noPasswordError)}

        setLoading(true);

        try {
            const newCurrentUser = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/login', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password })
            })

            if(!newCurrentUser.ok) throw newCurrentUser;

            const newCurrentUserData = await newCurrentUser.json()
            
            if ( itsADifferentDay(newCurrentUserData.lastConnection) ) {
                const newUserData = getNewUserDataForANewDay(newCurrentUserData);

                fetch(process.env.NEXT_PUBLIC_API_URL + '/api/user/update', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(newUserData)
                })
                
                setUserData({...newCurrentUserData, ...newUserData});
            }else{
                setUserData(newCurrentUserData);
            }

            closeModal();
        } catch (e) {
            const error = await e.json();
            setError(error.errorMessage);
            setLoading(false);
        }
    }

    return (
        <AuthModalForm submitHandler={logInHandler}>
            <AuthModalInput labelText={"Email"} type={"email"} placeholderText={componentTexts.yourEmail} value={email} onChangeHandler={e => setEmail(e.target.value)} />

            <AuthModalInput labelText={componentTexts.password} type={"password"} placeholderText={componentTexts.yourPassword} value={password} onChangeHandler={e => setPassword(e.target.value)} />
            
            <ModalButton disabled={loading} text={componentTexts.logIn} type={"submit"}/>
        </AuthModalForm>
    )
}

export default LogInForm