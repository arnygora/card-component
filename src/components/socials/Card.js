import React from 'react'
import {Author} from "../Author";

const Card = () => (
    <div className="card-item">
        <h1 className='card-item__title'>Learning React Start? Start Small</h1>
        <div className="author">
            <Author/>
        </div>
    </div>
);

export {Card};
