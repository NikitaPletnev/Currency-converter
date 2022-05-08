import React from "react";
import '../../Styles/linksLogin.css'

interface LinksLoginInterface {
    setStatus(status: 'login' | 'register' | 'forgotPassword' | 'currency'): void;
}

const LinksLogin = ({setStatus}: LinksLoginInterface) => {
    return (
        <div className='linksContainer'>
            <span onClick={() => {
                setStatus("register")
            }}>Signup</span>
            <span onClick={() => {
                setStatus("forgotPassword")
            }}>Forgot Password?</span>
        </div>
    )
}

export default LinksLogin;
