import React, { useState } from 'react'
import { UseTextsContext } from '../../contexts/TextsContext';
import AuthModalForm from './AuthModalForm';
import AuthModalInput from './AuthModalInput';
import ModalButton from '../Modal/ModalButton';

function ResetPasswordForm() {

    const { appTexts } = UseTextsContext();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const componentTexts = appTexts.header.AuthenticationModal;

    async function resetPasswordHandler(setError, setMessage) {
        setError("");
        setMessage("");

        if (!email) return setError(componentTexts.noEmailError);

        setLoading(true);

        try {
            // setMessage(componentTexts.checkYourEmail);
            setMessage("Función no implementada");
        } catch {
            setError(componentTexts.failedResetPassword)
        };

        setLoading(false);
    }

    return (
        <AuthModalForm onSubmit={resetPasswordHandler}>
            <AuthModalInput labelText={"Email"} type={"email"} placeholderText={componentTexts.yourEmail} value={email} onChangeHandler={e=>setEmail(e.target.value)} />
            <ModalButton disabled={loading} text={componentTexts.sendEmail} type={"submit"}/>
        </AuthModalForm>
    )
}

export default ResetPasswordForm