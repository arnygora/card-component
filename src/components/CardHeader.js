import React, {Component} from 'react'

class CardHeader extends Component {
    state = {
        isClicked: false
    };

    onClickButton = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    };

    render() {
        return (
            <div className='header-block'>
                <div className="header-block__logo">
                    <p>DEV</p>
                </div>
                <div className='header-block__text'>
                    <div className="header-block__title">
                        <h4>The Practical Dev</h4><span>&#64;ThePracticalDev - Sep 10</span>
                    </div>
                    <p>Learning React? Start Small</p>
                    <address>&#123; author:<a href='#'>&#64;dceddia</a> &#125;</address>
                </div>
                <button onClick={this.onClickButton}>{
                    this.state.isClicked ? String.fromCharCode(9650) : String.fromCharCode(9660)
                }</button>
            </div>
        )
    }
}

export {CardHeader}
