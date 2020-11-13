import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import winterImg from '../assets/Winter.jpg';
import winterImg2 from '../assets/Winter2.jpg';


export default class CarouselBox extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img 
						className="d-block w-100"
						src={ winterImg }
						alt="Winter"
					/>
					<Carousel.Caption>
						<h3>Winter image</h3>
						<p>some description</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img 
						className="d-block w-100"
						src={ winterImg2 }
						alt="forestWinter"
					/>
					<Carousel.Caption>
						<h3>Forest winter image</h3>
						<p>some description</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img 
						className="d-block w-100"
						src={ winterImg }
						alt="Winter"
					/>
					<Carousel.Caption>
						<h3>Winter image</h3>
						<p>some description</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}
