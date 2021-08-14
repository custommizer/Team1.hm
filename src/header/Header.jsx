import {Link} from 'react-router-dom'
import "./menu.css"
import Menubar from './Menubar'
import React, {useState} from 'react'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {IoCartOutline} from 'react-icons/io5'
import logotype from '../mainpage/images/logo.png'







function Header() {
    
    const [show,setShow]=useState(false)
    const [korz,setKorz]=useState(false)
    
   
    return(
        

        <div className="header">
            <div className="header-inner">
            {
                show?< Menubar setShow={setShow}/>:null
            }
            
            <button  className="Header_buttons" onClick={()=>setShow(true)}><AiOutlineMenuUnfold/></button>
            <img src={logotype} />
            <button className="Header_buttons" onClick={()=>setKorz(true)}><IoCartOutline/></button>
            
           

            </div>


           
        </div>      
    )
}

export default Header;