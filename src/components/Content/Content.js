import React from 'react';
import {cn} from '@bem-react/classname';
import './Content.scss';
import '../Card/Card';
import Card from "../Card/Card";

const cnContent = cn('Content');

class Content extends React.Component {
    constructor() {
        super();
        this.state = {events: []};
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/events')
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                this.setState({
                    events: res.data
                })
            })
            .catch( alert );
    }

    render() {
        return (
            <main className={cnContent()}>
                <h1 className={cnContent('Header')}>Лента событий</h1>
                <div className={cnContent('CardsList')}>
                    {this.state.events.map(c => <Card data={c}/>)}
                </div>
            </main>
        );
    }
}

export default Content;