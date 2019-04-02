import React, {Component} from 'react';
import {Card} from "./socials/Card";
import {Description} from "./Description";
import {CardHeader} from "./CardHeader";

class SocialCard extends Component {
    render() {
        return (
            <div className="container">
                <CardHeader/>
                <div className="card-wrapper">
                    <Card/>
                    <Description/>
                </div>
            </div>
        );
    }
}

export {SocialCard};
