import React from 'react';
import '../../Styles/box.css';


const Box = (props: { children: React.ReactNode }) => {
    return (
        <div className='container'>
            <div className='box'>{props?.children || null}</div>
        </div>
    )
}

export default Box;
