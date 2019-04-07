import React, {Component} from 'react'
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
        const {weather, main, wind, sys, name} = this.state.data;
        return (
            <div className='weather-card'>
                <p className='weather-card__city'>Місто: {name || 'Unknown'}</p>
                <p className='weather-card__descr'>Хмарність: {weather[0].description}</p>
                <p className='weather-card__wind'>Швидкість вітру: {wind.speed}</p>
                <p className='weather-card__pressure'>Тиск: {main.pressure}</p>
                <p className='weather-card__sunrise'>Схід сонця: {msToTime(sys.sunrise)}</p>
                <p className='weather-card__sunset'>Захід сонця: {msToTime(sys.sunset)}</p>
                <div>{console.log(this.props.location.key)}</div>
            </div>
        )
    }
}

export {Board};
