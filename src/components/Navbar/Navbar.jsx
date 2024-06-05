import React from 'react'
import '../Navbar/navbar.css'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom'
import '../../../src/jquery-3.7.1.min.js'
export default function Navbar() {
    function menuedown(){
        $('.nav-left').removeClass("up")
        $('.nav-left').toggleClass("down")
    }
    function close(){
        $('.nav-left').removeClass("down")
        $('.nav-left').addClass("up")
    }
    return (
        <nav>
         <Link onClick={close} to='/' className='nav-right'>
            الفوز بالجنة  
            </Link>   
            <ul className='nav-left'>
                <li><Link onClick={close}  to="/">الصفحه الرئيسيه </Link><span></span></li>
                <li><Link onClick={close}  to="/Ahadith">أحاديث </Link><span></span></li>
                <li><Link onClick={close}  to="/quran">القرأن الكريم </Link><span></span></li>
                <li><Link onClick={close}  to="/times">أوقات الصلاة</Link><span></span></li>
                <li><Link  onClick={close} to="/contact">تواصل معنا </Link><span></span></li>
            </ul>
            <IoMdMenu onClick={menuedown} className='menue' />

        </nav>
    )
}
