import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AuthForm.css";

export default class RegisterPage extends Component {

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

    register() {
        fetch("https://boiling-fortress-21285.herokuapp.com/api/register").then(response => {
            return response.json()
        }).then(json => {
            console.log(json);
            this.setState({time : json.Date})
        }).catch((error) => {
            console.error(error);
        })
    }


    /* ----------   UI   ---------- */

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

                    <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                        Register
                    </Button>

                    <br/><br/><br/><br/>
                    <p>
                        Already have an account?
                    </p>

                    <Link block bsSize="small" to="/login" type="submit">
                        Login
                    </Link>

                </form>
            </div>
        );
    }
}
