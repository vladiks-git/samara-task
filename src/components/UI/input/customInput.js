import React from 'react';
import './customInput.scss'

const CustomInput = ({inputHandler}) => {
    return (
        <div>
            <input className={'customInput'} type={'text'} onInput={inputHandler} placeholder={'Enter city'}/>
        </div>
    );
};

export default CustomInput;