import React from 'react';

import Clock from "../components/Clock.js"

export default class HomePage extends React.Component {
    render() {
        return (
            <div>

                <br/>
                <h1>Welcome, {this.props.email}!</h1>
                <br/>

                <Clock/>

            </div>
        )
    }
}
