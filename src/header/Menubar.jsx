import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineRight } from 'react-icons/ai'
import Aos from "aos";
import "aos/dist/aos.css";
import "./menu.css"




function Menubar({ setShow }) {
    useEffect(() => {
        Aos.init({ duration: 250 });
    }, []);

    

    return (
        <div className="menu" data-aos="fade-right" >
            <div className="menu-inner">

                <div className="menu-list">
                    <button onClick={() => setShow(false)}><IoCloseOutline /></button>
                    <Link to="/client" className="links_link"><BiUser />Личный Кабинет</Link>
                    <Link to="/main" className="links_link"> <AiOutlineRight />Главная</Link>
                    <Link to="/about-page" className="links_link"><AiOutlineRight />О нас  </Link>
                    <Link to="/store" className="links_link"><AiOutlineRight />Магазин</Link>
                    <Link to="/call" className="links_link"><AiOutlineRight />Контакты</Link>
                    <Link to="/faq" className="links_link"><AiOutlineRight/>Условия заказа</Link>

                </div>

            </div>
            <button className="ghostclose" onClick={() => setShow(false)}></button>
        </div>

    )
}

export default Menubar