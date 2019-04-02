import React from 'react'

const CardHeader = () => (
    <div className='header-block'>
        <div className="header-block__logo">
            <p>DEV</p>
        </div>
        <div className='header-block__text'>
            <div className="header-block__title">
                <h4>The Practical Dev</h4><span>&#64;ThePracticalDev - Sep 10</span>
            </div>
            <p>Learning React? Start Small</p>
            <address>author:<a href='#'>&#64;dceddia</a></address>
        </div>
    </div>
);

export {CardHeader}
