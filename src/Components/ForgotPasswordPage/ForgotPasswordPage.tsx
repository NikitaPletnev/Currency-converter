import React, {useState} from 'react';
import Box from "../DesignedElements/Box";
import Title from "../DesignedElements/Title";
import TextField from "../DesignedElements/TextField";
import Button from "../DesignedElements/Button";
import {checkPassword} from "../../helpers/checkPassword";
import setPopup from "../../helpers/setPopup";
import {checkEmail} from "../../helpers/checkEmail";
import {checkUserName} from "../../helpers/checkUserName";
import BackButton from "../DesignedElements/BackButton";

interface ForgotPasswordPageInterface {
    resetPassword(email: string, login: string, password: string): void;

    setStatus(status: 'login' | 'register' | 'forgotPassword' | 'currency'): void;
}

const ForgotPasswordPage = ({resetPassword, setStatus}: ForgotPasswordPageInterface) => {

    const [email, setEmail] = useState<string | null>();
    const [userName, setUserName] = useState<string | null>();
    const [password, setPassword] = useState<string | null>();

    return (
        <Box>
            <BackButton onClick={() => {
                setStatus('login')
            }}/>
            <Title text={'reset password'} size={'small'}/>
            <TextField type={"email"} setValue={setEmail}/>
            <TextField type={'text'} setValue={setUserName}/>
            <p>NEW PASSWORD</p>
            <TextField type={"password"} setValue={setPassword}/>
            <Button buttonText={'Reset Password'} disabled={!email || !userName || !password} onClick={() => {
                if (!checkPassword(password)) {
                    setPopup('Password  must be from 8 to 20 characters long, \n ' +
                        'including at least one special character \n' +
                        'at least one lowercase letter and at least one uppercase letter', "error")
                }
                if (email && userName && password && checkEmail(email) && checkUserName(userName) && checkPassword(password)) {
                    resetPassword(email, userName, password)
                }
            }}/>
        </Box>
    )
}

export default ForgotPasswordPage
