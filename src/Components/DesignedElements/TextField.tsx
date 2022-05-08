import React from 'react';
import '../../Styles/textfield.css';

interface TextFieldInterface {
    type: 'text' | 'password'  | 'email';

    setValue(value: string): void;
}

const TextField = ({type, setValue}: TextFieldInterface) => {

    const getPlaceHolder = () => {
        switch (type) {
            case "text":
                return 'Username';
            case "password":
                return 'Password';
            case "email":
                return 'Email';
            default :
                return '';
        }
    }

    const getMaxLength = () => {
        switch (type) {
            case "text":
                return 20;
            case "password":
                return 20;
            case "email":
                return 100;
            default :
                return 100;
        }
    }

    return (
        <input className='textField' maxLength={getMaxLength()} placeholder={getPlaceHolder()} type={type} onChange={(e) => {
            setValue(e.target.value)
        }}/>
    )
}

export default TextField;
