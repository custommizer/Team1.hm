import React from 'react';
import "./main.css";
import Intro from './Intro/Intro';
import Clothes from '../ListOfClothes/Clothes';
import FlexClothes from '../FlexClothes/FlexClothes';
import Footer from '../Footer/Footer';

function Main(){
    return(
        <div className="main">
            <Intro />
            <Clothes />
            <FlexClothes />
            <Footer />
        </div>

    )
}
export default Main;