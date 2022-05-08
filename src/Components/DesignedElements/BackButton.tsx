import React  from 'react';
import '../../Styles/backButton.css';


interface BackButtonInterface {
    onClick(): void
}

const BackButton = ({onClick}: BackButtonInterface) => {
    return <button className='backButton' onClick={onClick}>❮</button>
}

export default BackButton;
