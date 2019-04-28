import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.setYear(year);
        console.log(year)
    };

    static propTypes = {
        // year: PropTypes.number.isRequired,
        // photos: PropTypes.array.isRequired,
        // setYear: PropTypes.func.isRequired,
    };
    render() {
        const { year, photos } = this.props;
        return(
            <Fragment>
                <div>
                    <button onClick={this.onBtnClick}>2019</button>
                    <button onClick={this.onBtnClick}>2018</button>
                    <button onClick={this.onBtnClick}>2017</button>
                    <button onClick={this.onBtnClick}>2016</button>
                </div>
                <p>
                    {/*У Вас {photos.length} фото за {year} рік*/}
                </p>
            </Fragment>
        )
    }
}

export { Page }
