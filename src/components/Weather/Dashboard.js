import React, {Component} from 'react'

class Board extends Component {
    state = {
        data: []
    };

  getData = () => {
      let url = 'https://api.openweathermap.org/data/2.5/weather?q=Cherkasy,ua&appid=309e94a3b5f4c65cd46f4e8bdf08ef8e';
      fetch(url)
          .then(res => res.json())
          .then((out) => {
              this.setState({
                  data: out
              });

              console.log('Checkout this JSON! ', out);

          }).catch(err => {
          throw err
      });
  };

    render() {
        const {weather, base, main, wind, clouds, dt, sys, id, name, cod} = this.state.data;
        return (
            <div>
                <button onClick={this.getData}>Get data</button>

                <p>{console.log({weather})}</p>
                {/*<p>{base}</p>*/}
                {/*<p>{wind}</p>*/}

            </div>

        )
    }
}

export {Board};
