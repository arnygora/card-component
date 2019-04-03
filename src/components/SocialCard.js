import React, {Component} from 'react';
import {Card} from "./socials/Card";
import {CardHeader} from "./CardHeader";
import {Socials} from "./socials/Socials";

class SocialCard extends Component {
    state = {
        isClicked: false
    };

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        });
        console.log(this.state.isClicked)

    };

    render() {
        return (
            <div className="container">
                <CardHeader test={this.handleClick} buttonState={this.state.isClicked}/>
                {this.state.isClicked ?
                    <div className="card-wrapper">
                        <Card/>
                    </div>
                    : <h3 className='insteadBlock'>collapsed card</h3>
                }
                <Socials />
            </div>
        );
    }
}

export {SocialCard};
