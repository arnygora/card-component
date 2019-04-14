import React, {Component} from 'react'
import axios from 'axios';

class Reddit extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({
                    posts
                })
            })
    }

    render() {
        return (
            <div className='posts-block'>
                <h1>\n\REACT.JS</h1>
                <ul className='posts-block__list'>
                    {this.state.posts.map((item, key) => (
                        <li key={item.id} className='posts-block__item'>{item.title}
                        <span><a target='_blank' href={item.url}>More</a></span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export {Reddit}
