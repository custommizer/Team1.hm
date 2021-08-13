import React from 'react';
import "./main.css";
import Summer from './Summer/Summer';
import Clothes from '../ListOfClothes/Clothes';

function Main(){
    return(
        <div className="main">
            <Summer />
            <Clothes />
        </div>

    )
}
export default Main;