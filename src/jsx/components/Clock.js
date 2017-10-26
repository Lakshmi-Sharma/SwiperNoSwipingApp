import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ""
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        fetch("https://boiling-fortress-21285.herokuapp.com/api/date").then(response => {
            return response.json()
        }).then(json => {
            console.log(json);
            this.setState({time : json.Date})
        }).catch((error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <p className="App-clock">
                Hello, World!
                <br/>
                The time is {this.state.time}.
            </p>
        );
    }
}