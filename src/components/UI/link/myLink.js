import './myLink.scss'

import React from 'react';
import {NavLink} from "react-router-dom";

const MyLink = ({title, path}) => {
    return (
        <div className={'link'}>
            <NavLink to={path}>{title}</NavLink>
        </div>
    );
};

export default MyLink;