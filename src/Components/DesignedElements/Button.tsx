import React, {useState} from 'react';
import '../../Styles/button.css';


interface ButtonInterface {
    buttonText: string;
    disabled: boolean;

    onClick(): void
}

const Button = ({buttonText, onClick, disabled}: ButtonInterface) => {
    const [animate, setAnimate] = useState(false)
    const click = () => {
        setAnimate(true);
        onClick();
        setTimeout(() => {
            setAnimate(false)
        }, 500)
    }

    return <button disabled={disabled} className={`button ${animate ? 'animation' : ''} ${disabled ? 'disabledButton' : '' }`}
                   onClick={click}>{buttonText}</button>
}

export default Button;
