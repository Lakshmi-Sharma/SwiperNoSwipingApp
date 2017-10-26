import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';

export default class SwiperNavbar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>

                <Navbar.Header>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>

                        <LinkContainer to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

