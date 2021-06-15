import './home.scss'
import React from 'react';
import MyLink from "../UI/link/myLink";
import {staticDate} from "../../static-string-data";

const Home = () => {
    const renderLinks = () => {
        return staticDate.links.map(item => {
            return (
                <MyLink
                    key={item.title}
                    title={item.title}
                    path={item.path}
                />
            )
        })
    }

    return (
        <div className={'home'}>
            <div className={'home__title'}>{staticDate.welcome.title}</div>
            <div className={'home__subTitle'}>{staticDate.welcome.subTitle}</div>
            <nav className={'home__menu'}>
                {renderLinks()}
            </nav>
        </div>
    );
};

export default Home;