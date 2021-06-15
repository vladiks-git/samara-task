import React from 'react';

const MainData = ({temp, feelTemp, humidity}) => {
    return (
        <div>
            <div>Temperature  {(temp > 0) ? `+${temp}` : `-${temp}`}</div>
            <div>Feel as {(feelTemp > 0) ? `+${feelTemp}` : `-${feelTemp}`}</div>
            <div>Humidity  {humidity} %</div>
        </div>
    );
};

export default MainData;