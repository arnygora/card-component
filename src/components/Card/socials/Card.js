import React from 'react'
import {Author} from "../Author";
import {Description} from "../Description";

const Card = () => (
    <div className='card-block'>
        <div className="card-item">
            <div className="logo-block">
                <div className="logo-block__title">
                    <marquee scrollamount="2">DEV</marquee>
                </div>
            </div>
            <h1 className='card-item__title'>Learning React Start? Start Small</h1>
            <div className="author">
                <Author/>
            </div>
        </div>
        <Description/>
    </div>
);

export {Card};
