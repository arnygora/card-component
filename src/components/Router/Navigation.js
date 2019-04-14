import React from 'react'
import {NavLink} from "react-router-dom";

const Navy = () => (
        <aside className='navy'>
            <nav className='navy-block'>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/card' activeClassName="active">Card component</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/weather' activeClassName="active">Weather component</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/reddit' activeClassName="active">News component</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/seasons' activeClassName="active">Seasons</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink className='navy-block__link' to='/' activeClassName="active">Some link</NavLink>
                </li>
            </nav>
        </aside>
);

export {Navy}
