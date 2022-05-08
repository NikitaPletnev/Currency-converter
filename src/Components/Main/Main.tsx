import React, {useState} from 'react';
import '../../Styles/main.css';
import LoginPage from "../LoginPage/LoginPage";
import setPopup from "../../helpers/setPopup";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import CurrencyContainer from "../Currency/CurrencyContainer";

function Main() {
    const [status, setStatus] = useState<'login' | 'register' | 'forgotPassword' | 'currency'>('login')

    const setLogin = (login: string, password: string): void => {
        if (!!localStorage.getItem(login)) {
            if (JSON.parse(localStorage.getItem(login) as string).password === password) {
                setStatus('currency')
            } else {
                setPopup('Incorrect password!', "error")

            }
        } else {
            setPopup('User with this login not found.\nPlease SIGHUP or enter another login', "error")
        }
    }

    const setRegistration = (email: string, login: string, password: string): void => {
        const info = {password, email};
        localStorage.setItem(login, JSON.stringify(info));
        setPopup('Signup passed successfully', "success");
        setStatus('currency');
    }

    const resetPassword = (email: string, login: string, password: string): void => {
        if (!!localStorage.getItem(login)) {
            const user = JSON.parse(localStorage.getItem(login) as string);
            if (user.email === email) {
                if (user.password === password) {
                    setPopup('The old password must not match the new one. \n Try another password', "error");
                } else {
                    const info = {password, email};
                    localStorage.setItem(login, JSON.stringify(info));
                    setPopup('Password changed successfully!', "success");
                }
            } else {
                setPopup('Email not confirmed \n Check your email and try again', "error");
            }
        } else {
            setPopup('User with this login not found.\nPlease SIGHUP or enter another login', "error");
        }
    }


    const renderContent = () => {
        switch (status) {
            case 'login' :
                return <LoginPage setLogin={setLogin} setStatus={setStatus}/>
            case "register":
                return <RegistrationPage setRegistration={setRegistration} setStatus={setStatus}/>
            case "forgotPassword":
                return <ForgotPasswordPage resetPassword={resetPassword} setStatus={setStatus}/>
            case "currency":
                return <CurrencyContainer setStatus={setStatus}/>
        }
    }

    return (
        <div className="main">
            {renderContent()}
        </div>
    );
}

export default Main;
