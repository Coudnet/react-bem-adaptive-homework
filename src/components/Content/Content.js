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
            <main>

            </main>
        );
    }
}

export default Content;