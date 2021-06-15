import React, {useEffect, useState} from 'react';
import './time.scss'
import MyLink from "../UI/link/myLink";

const Time = () => {

    let [hours, setHours] = useState(0)
    let [minutes, setMinutes] = useState(0)
    let [seconds, setSeconds] = useState(0)

    useEffect(() => {
        currentTime()
    },[])

    const currentTime = () => {
        const date = new Date()
        setHours(date.getHours())
        setMinutes(date.getMinutes())
        setSeconds(date.getSeconds())
        setInterval(() => {
            const date = new Date()
            setHours(date.getHours())
            setMinutes(date.getMinutes())
            setSeconds(date.getSeconds())
        }, 1000)
    }

    return (
        <div className={'time'}>
            <p className={'time__title'}>Current time</p>
            <div className={'time__currentTime'}>
                {(hours < 10) ? `0${hours}` : hours}-
                {(minutes < 10) ? `0${minutes}` : minutes}-
                {(seconds < 10) ? `0${seconds}` : seconds}
            </div>
            <MyLink title={'Back'} path={'/'}/>
        </div>
    );
};

export default Time;