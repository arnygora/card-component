import React, {Component} from 'react'

class Board extends Component {
    state = {
        data: []
    };

//Promise.resolve().then(() => {
 // this.setState({ n: 13 });
 // console.log(this.state.n); // ?????
//});

    componentWillMount() {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=Cherkasy,ua&appid=309e94a3b5f4c65cd46f4e8bdf08ef8e';
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                Array.from(out).forEach(item => {
                   this.setState({
                       ...this.state.data,
                       item
                   })
                });
                console.log('Checkout this JSON! ', out);
            })
            .catch(err => {
                throw err
            });
    }

    getData = () => {

    };

    render() {
        const { weather, base, main, wind, clouds, dt, sys, id, name, cod } = this.state.data;
        return (
            <div>
                <button onClick={this.getData}>Get data</button>

                <p>{weather}</p>
                <p>{base}</p>
                <p>{wind}</p>

            </div>

        )
    }
}

export {Board}
