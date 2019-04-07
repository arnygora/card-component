import React, {Component, Fragment} from 'react'
import {msToTime} from './timeConverter'

class Board extends Component {
    state = {
        data: null
    };

    async componentDidMount() {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=Cherkasy,ua&appid=309e94a3b5f4c65cd46f4e8bdf08ef8e';

        const res = await fetch(url);
        const out = await res.json();
        await this.setState({data: out});
    }


    render() {
        if (!this.state.data) {
            return <div>Loading</div>
        }
        const {weather, main, wind, clouds, dt, sys, id, name, cod, coord} = this.state.data;
        return (
            <Fragment>
                <div>
                    <p>Місто: {name || 'Unknown'}</p>
                    <p>Хмарність: {weather[0].description}</p>
                    <p>Швидкість вітру: {wind.speed}</p>
                    <p>Тиск: {main.pressure}</p>
                    <p>Схід сонця: {msToTime(sys.sunrise)}</p>
                    <p>Захід сонця: {msToTime(sys.sunset)}</p>
                    {/*<p>Координати: {Object.values(coord)}</p>*/}
                </div>
            </Fragment>
        )
    }
}

export {Board};
