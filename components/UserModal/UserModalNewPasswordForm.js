import React, { useState } from 'react'
import { useDBContext } from '../../contexts/DBContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import UserModalForm from './UserModalForm';

function UserModalNewPasswordForm() {

    const { appTexts } = UseTextsContext();
    const { updateDoc } = useDBContext();

    const [password, setPassword] = useState("")

    const componentTexts = appTexts.header.UserModal;

    function submitHandler(inputValue, openModal, setError) {
        if (inputValue.trim()) {
            if (inputValue.trim().length >= 8) {
                openModal();
            }else{
                setError(appTexts.header.AuthenticationModal.shortPasswordError);
            }
        }
    }

    async function updateUserPassword(setError, setMessage, setLoading) {
        setLoading(true);
        setMessage('');
        setError('');

        try {
            await updateDoc({ password });
            setMessage('Password updated');
            setPassword('');
        } catch {
            setError(componentTexts.changePasswordError);
        } finally{
            setLoading(false);
        }

        setTimeout(() => {setMessage(""); setError("");}, 5000);
    }

    return (
        <UserModalForm 
            labelText={componentTexts.wantUpdatePassword}
            inputPlaceHolder={componentTexts.newPassword}
            inputType={'password'}
            inputHandler={e=>setPassword(e.target.value)}
            inputValue={password}
            buttonText={componentTexts.Update}

            submitHandler={submitHandler}
            confirmHandler={updateUserPassword}

            confirmModalText={'Do you really want to update you password?'}
        />
    )
}

export default UserModalNewPasswordForm