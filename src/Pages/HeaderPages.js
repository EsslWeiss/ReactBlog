import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';

import progImg from '../assets/programming_language.png';
import frameworkImg from '../assets/Server-Side-Frameworks.png';
import designImg from '../assets/browser-design.png';


export class Home extends Component {
	render() {
		return (
			<CarouselBox />
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
		return (
			<div>Contacts!</div>
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
