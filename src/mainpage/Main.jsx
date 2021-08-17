import React from 'react';
import "./main.css";
import Summer from './Summer/Summer';
import Clothes from '../ListOfClothes/Clothes';
import FlexClothes from '../FlexClothes/FlexClothes';

function Main(){
    return(
        <div className="main">
            <Summer />
            <Clothes />
            <FlexClothes />
        </div>

    )
}
export default Main;