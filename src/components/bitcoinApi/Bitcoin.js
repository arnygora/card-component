import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { data } from './data'

class Bitcoin extends Component {

    componentWillUnmount() {
        this.destroyChart();
    }

    render() {
        return (
            <div className='chart'>

                <Bar data={data}
                    />
            </div>


        )
    }
}

export {Bitcoin}
