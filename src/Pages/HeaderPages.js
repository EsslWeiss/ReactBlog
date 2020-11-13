import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { 
	Container, 
	Tab, 
	Row, 
	Col, 
	Nav,
	Form,
	Button,
	CardDeck,
	Card
} from 'react-bootstrap';

import progImg from '../assets/programming_language.png';
import frameworkImg from '../assets/Server-Side-Frameworks.png';
import designImg from '../assets/browser-design.png';


export class Home extends Component {
	render() {
		return (
			<>
				<CarouselBox />

				<Container>
					<h2 className="text-center m-4">Landscapes</h2>
					<CardDeck className="m-4">
						<Card>
							<Card.Img 
								variant="top"
								src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							/>
							<Card.Body>
								<Card.Title>Sunset</Card.Title>
								<Card.Text>just sunset</Card.Text>
								<Button variant="primary">About</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img 
								variant="top"
								src="https://images.pexels.com/photos/4620574/pexels-photo-4620574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							/>
							<Card.Body>
								<Card.Title>Morning mountains</Card.Title>
								<Card.Text>morning</Card.Text>
								<Button variant="primary">About</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img 
								variant="top"
								src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							/>
							<Card.Body>
								<Card.Title>Mountains at night</Card.Title>
								<Card.Text>night</Card.Text>
								<Button variant="primary">About</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img 
								variant="top"
								src="https://images.pexels.com/photos/2007139/pexels-photo-2007139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							/>
							<Card.Body>
								<Card.Title>It's snowing</Card.Title>
								<Card.Text>snowing</Card.Text>
								<Button variant="primary">About</Button>
							</Card.Body>
						</Card>
					</CardDeck>
				</Container>
			</>
		)
	}
}

export class About extends Component {
	render() {
		return (
			<Container className="mt-3">
				<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column mt-2">
								<Nav.Item>
									<Nav.Link eventKey="first">
										Design
									</Nav.Link>
									<Nav.Link eventKey="second">
										Programming
									</Nav.Link>
									<Nav.Link eventKey="third">
										Frameworks
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<img src={ designImg } />
									<br />
									<p>some descriptions!</p>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<img src={ progImg } />
									<br />
									<p>some descriptions!</p>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<img src={ frameworkImg } />
									<br />
									<p>some descriptions!</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		);
	}
}

export class Contacts extends Component {
	render() {
		const styles = {width: '500px'}
		return (
			<Container style={styles}>
				<h2 className="text-center"> Contact me </h2>
				<Form>
					<Form.Group controlId="EmailControl">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="enter email address" />
						<Form.Text>
							Thanks!
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="PasswordControl">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>
					<Form.Group controlId="CheckBoxControl">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>

					<Button variant="primary" type="submit"> Submit </Button>
				</Form>

			</Container>
		);
	}
}

export class Blog extends Component {
	render() {
		return (
			<div>Blog!</div>
		);
	}
}
