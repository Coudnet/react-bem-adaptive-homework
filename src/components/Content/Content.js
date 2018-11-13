import React from 'react';

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
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.events.length}.</h2>
            </div>
        );
    }
}

//const Content = new ContentClass();

export default Content;