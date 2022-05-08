import React from 'react';
import '../../Styles/title.css';

interface TitleInterface {
    text: string;
    size: 'big' | 'small';
}

const Title = ({text, size}: TitleInterface) => {
    return (
        <div className={`title ${size === 'small' ? 'titleSmall' : 'titleBig'}`}>
            <span>{text.toUpperCase()}</span>
        </div>
    )
}

export default Title;
