import React from 'react'
import {NavLink} from "react-router-dom";

const Navy = () => (
        <aside className='navy'>
            <nav className='navy-block'>
                <li className='navy-block__item'>
                    <NavLink to='/card'>Card component</NavLink>
                </li>
                <li className='navy-block__item'>
                    <NavLink to='/weather'>Weather component</NavLink>
                </li>
            </nav>
        </aside>
);

export {Navy}
