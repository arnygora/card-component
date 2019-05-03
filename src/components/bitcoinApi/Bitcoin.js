import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

// import {data} from './data'

class Bitcoin extends Component {
    state = {
        description: '',
        data: {
            labels: ['uno', 'dos', 'tres'],
            datasets: [{
                label: 'Bitcoin API',
                data: [45, 54, 58],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        }
    };

    async componentDidMount() {
        const fetchParams = {
            method: 'GET',
            mode: 'cors'
        };

        const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
        const res = await fetch(url, fetchParams);
        const out = await res.json();

        const {USD, EUR, GBP} = out.bpi;
        console.log(out);
        await this.setState((prevState) => ({
            ...prevState,
            description: out.disclaimer,
            labels: [`${USD.description}`, `${EUR.description}`, `${GBP.description}`]
        }));
    }

    static defaultProps = {
        titleDisplay: true,
        legendDisplay: true,
        legendPosition: 'bottom'
    };

    // componentWillUnmount() {
    //     this.destroyChart();
    // }

    render() {
        return (
            <div className='chart'>
                <Bar data={this.state.data}
                     options={{
                         title: {
                             display: this.props.titleDisplay,
                             text: `${this.state.description}`,
                             fontSize: 25
                         },
                         legend: {
                             display: this.props.legendDisplay,
                             position: this.props.legendPosition
                         }
                     }}
                />
            </div>
        )
    }
}

export {Bitcoin}
