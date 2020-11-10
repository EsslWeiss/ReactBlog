import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Button, Form } from 'react-bootstrap';
import logo from '../logo.svg'

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">
							<img
								src={logo}
								heigh="45"
								width="45"
								className="d-inline-block align-top"
							/> React blog
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/"> Home </Nav.Link>
								<Nav.Link href="/about"> About me </Nav.Link>
								<Nav.Link href="/contacts"> Contacts </Nav.Link>							
								<Nav.Link href="/blog"> Blog </Nav.Link>
							</Nav>
								<Form inline>
									<FormControl 
										type="text"
										placeholder="search"
										className="mr-sm-2"
									/>
									<Button variant="outline-info">search</Button>
								</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}
