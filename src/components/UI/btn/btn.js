import React from 'react';
import './btn.scss'

const Btn = ({clickHandler, mt}) => {
    return (
        <button style={{marginTop: mt}} className={'btn'} onClick={clickHandler}>
            get weather
        </button>
    );
};

export default Btn;