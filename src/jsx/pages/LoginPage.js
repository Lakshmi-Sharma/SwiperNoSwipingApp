import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AuthForm.css";

export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    /* ---------- Actions ---------- */

    login() {
        this.context.router.push({
            pathname: '/home',
            state: {email: "josh"}
        })
    }


    /* ---------- Actions ---------- */

    render() {
        return (
            <div className="Auth">
                <form onSubmit={this.handleSubmit}>

                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <Button block bsSize="large" onClick={this.login} disabled={!this.validateForm()} type="submit">
                        Login
                    </Button>

                    <br/><br/><br/><br/>
                    <p>
                        Need an account?
                    </p>

                    <Link block bsSize="small" to="/register" type="submit">
                        Register
                    </Link>

                </form>
            </div>
        );
    }
}