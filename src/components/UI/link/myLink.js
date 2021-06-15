import './myLink.scss'

import React from 'react';
import {NavLink} from "react-router-dom";

const MyLink = ({title, path, width}) => {
    return (
        <div style={{width: width}} className={'link'}>
            <NavLink to={path}>{title}</NavLink>
        </div>
    );
};

export default MyLink;