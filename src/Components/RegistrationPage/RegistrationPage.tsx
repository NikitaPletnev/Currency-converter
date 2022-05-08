import React, {useState} from "react";
import Box from "../DesignedElements/Box";
import TextField from "../DesignedElements/TextField";
import Button from "../DesignedElements/Button";
import {checkPassword} from "../../helpers/checkPassword";
import {checkUserName} from "../../helpers/checkUserName";
import setPopup from "../../helpers/setPopup";
import {checkEmail} from "../../helpers/checkEmail";
import Title from "../DesignedElements/Title";
import BackButton from "../DesignedElements/BackButton";

interface RegistrationPageInterface {
    setRegistration(email: string, login: string, password: string): void;

    setStatus(status: 'login' | 'register' | 'forgotPassword' | 'currency'): void;
}

const RegistrationPage = ({setRegistration, setStatus}: RegistrationPageInterface) => {
    const [email, setEmail] = useState<string | null>();
    const [userName, setUserName] = useState<string | null>();
    const [password, setPassword] = useState<string | null>();

    return (
        <Box>
            <BackButton onClick={() => {setStatus('login')}}/>
            <Title text={'signup'} size={'small'}/>
            <TextField type={'email'} setValue={setEmail}/>
            <TextField type={'text'} setValue={setUserName}/>
            <TextField type={'password'} setValue={setPassword}/>
            <Button buttonText={'Signup'} disabled={!email || !userName || !password} onClick={() => {
                if (!checkEmail(email)) {
                    setPopup('Email must include "@" and "." characters.', "error")
                }
                if (!checkUserName(userName)) {
                    setPopup('Username must have from 5 to 20 character.', "error")
                }
                if (!checkPassword(password)) {
                    setPopup('Password  must be from 8 to 20 characters long, \n ' +
                        'including at least one special character \n' +
                        'at least one lowercase letter and at least one uppercase letter', "error")
                }
                if (email && userName && password && checkEmail(email) && checkUserName(userName) && checkPassword(password)) {
                    setRegistration(email, userName, password)
                }
            }}/>
        </Box>
    )
}

export default RegistrationPage;
