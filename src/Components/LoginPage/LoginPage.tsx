import React, {useState} from 'react';
import Title from "../DesignedElements/Title";
import Box from "../DesignedElements/Box";
import TextField from "../DesignedElements/TextField";
import Button from "../DesignedElements/Button";
import LinksLogin from "./LinksLogin";
import setPopup from "../../helpers/setPopup";
import {checkPassword} from "../../helpers/checkPassword";
import {checkUserName} from "../../helpers/checkUserName";

interface LoginPageInterface {
    setLogin(login: string, password: string): void;

    setStatus(status: 'login' | 'register' | 'forgotPassword' | 'currency'): void;
}


const LoginPage = ({setLogin, setStatus}: LoginPageInterface) => {
    const [userName, setUsername] = useState<string | null>()
    const [password, setPassword] = useState<string | null>()

    return (
        <Box>
            <Title text={'login'} size={'small'}/>
            <TextField type={'text'} setValue={setUsername}/>
            <TextField type={'password'} setValue={setPassword}/>
            <Button disabled={!userName || !password} buttonText={'Login'} onClick={() => {
                if (!checkUserName(userName)) {
                    setPopup('Username must have from 5 to 20 character.', "error")
                }
                if (!checkPassword(password)) {
                    setPopup('Password  must be from 8 to 20 characters long, \n' +
                        'including at least one special character \n' +
                        'at least one lowercase letter and at least one uppercase letter', "error")
                }
                if (userName && password && checkUserName(userName) && checkPassword(password)) {
                    setLogin(userName, password)
                }
            }}/>
            <LinksLogin setStatus={setStatus}/>
        </Box>
    )
}

export default LoginPage;
