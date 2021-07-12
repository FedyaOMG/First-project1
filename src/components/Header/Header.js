import React from 'react';
import style from'./Header.module.css'
import userPhoto from'../../assets/img/userPhoto.png'
const Header = () => {
    return (
       <header>
           <img
               src={userPhoto} alt= ''
               className={style.img}></img>
       </header>
    )
}

export default Header;