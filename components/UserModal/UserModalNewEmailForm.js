import React, { useState } from 'react'
import { UseTextsContext } from '../../contexts/TextsContext';
import { useDBContext } from '../../contexts/DBContext';
import UserModalForm from './UserModalForm';

function UserModalNewEmailForm() {

    const { appTexts } = UseTextsContext();
    const { updateDoc } = useDBContext();

    const [email, setEmail] = useState("");

    const componentTexts = appTexts.header.UserModal;

    function submitHandler(inputValue, openModal) {
        if (inputValue.trim()) {
            openModal();
        }
    }
    
    async function updateUserEmail(setError, setMessage, setLoading) {
        setLoading(true);
        setMessage('');
        setError('');

        try {
            await updateDoc({ email });
            setMessage(componentTexts.emailBeenUpdated);
            setEmail("");
        } catch {
            setError(componentTexts.changeEmailError);
        } finally{
            setLoading(false);
        }

        setTimeout(() => {setMessage(""); setError("");}, 5000);
    }

    return (
        <>
            <UserModalForm
                labelText={componentTexts.wantUpdateEmail}
                inputPlaceHolder={componentTexts.newEmail}
                inputType={'email'}
                inputHandler={e=>setEmail(e.target.value)}
                inputValue={email}
                buttonText={componentTexts.Update}
                
                submitHandler={submitHandler}
                confirmHandler={updateUserEmail}
                
                confirmModalText={'Do you really want to update you email?'}
            />
        </>
    )
}

export default UserModalNewEmailForm