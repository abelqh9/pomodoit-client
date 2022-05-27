import React, { useState } from 'react'
import { useDBContext } from '../../contexts/DBContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import AuthModalForm from './AuthModalForm';
import AuthModalInput from './AuthModalInput';
import ModalButton from '../Modal/ModalButton';

function SignUpForm(props) {

    const { setUserData } = useDBContext(); 
    const { appTexts } = UseTextsContext();

    const { closeModal } = props;

    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const componentTexts = appTexts.header.AuthenticationModal;

    async function signUpHandler(setError) {
        setError("")

        if (!nickname) return setError("Your need a nickname");
        if (nickname.length > 16) return setError("Your nickname is too long")
        if (!email) return setError(componentTexts.noEmailError)
        if (!password || !confirmPassword) return setError(componentTexts.putPasswordsError)
        if (password !== confirmPassword) return setError(componentTexts.PasswordsNotSimilarError)
        if (password.length < 8) return setError(componentTexts.shortPasswordError)

        setLoading(true)

        try {
            const newCurrentUser = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/signup', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password, confirmPassword, nickname })
            });

            if(!newCurrentUser.ok) throw newCurrentUser;

            const newCurrentUserData = await newCurrentUser.json()

            setUserData(newCurrentUserData);
            closeModal();
        } catch (e) {
            const error = await e.json();
            setError(error.errorMessage);
            setLoading(false);
        }
    }
    

    return (
        <AuthModalForm submitHandler={signUpHandler}>
            <AuthModalInput labelText={"Nickname"} type={"text"} placeholderText={"Your nickname..."} value={nickname} onChangeHandler={e => setNickname(e.target.value)} />

            <AuthModalInput labelText={"Email"} type={"email"} placeholderText={componentTexts.yourEmail} value={email} onChangeHandler={e => setEmail(e.target.value)} />
                
            <AuthModalInput labelText={componentTexts.password} type={"password"} placeholderText={componentTexts.yourPassword} value={password} onChangeHandler={e => setPassword(e.target.value)} />
                
            <AuthModalInput labelText={componentTexts.confirmPassword} type={"password"} placeholderText={componentTexts.yourPassword} value={confirmPassword} onChangeHandler={e => setConfirmPassword(e.target.value)} />
            <ModalButton disabled={loading} text={componentTexts.signUp} type={"submit"}/>
        </AuthModalForm>
    )
}

export default SignUpForm