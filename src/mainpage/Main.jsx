import React from 'react';
import "./main.css";
import Intro from './Intro/Intro';
import Clothes from '../ListOfClothes/Clothes';
import FlexClothes from '../FlexClothes/FlexClothes';

function Main(){
    return(
        <div className="main">
            <Intro />
            <Clothes />
            <FlexClothes />
        </div>

    )
}
export default Main;