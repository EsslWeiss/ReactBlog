import React, { Component } from 'react';
import logo from '../logo.svg'
import { 
	Navbar,
	Nav,
	FormControl,
	Container, 
	Button,
	Form
} from 'react-bootstrap';
import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	Link
} from 'react-router-dom';
import { Home, About, Contacts, Blog } from '../Pages/HeaderPages';


export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">
							<img
								src={logo}
								heigh="45"
								width="45"
								className="d-inline-block align-top"
								alt="logo"
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

				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/blog" component={Blog} />
					</Switch>
				</Router>
			</>
		);
	}
}
