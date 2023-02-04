import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg?compress=1&resize=400x300'></img>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>

        </header>

    )
}

export default Header;