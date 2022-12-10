import React from 'react';
import { Card } from 'react-bootstrap';
import Stars from './Stars';
import ReviewForm from './ReviewForm.js';

export default class Movie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      ratingImage: props.ratingImage,
      summary: props.summary,
      image: props.image
    };
  }

  render() {
    return (
      <Card style={{ width: '28rem' }}>
        <Card.Header>{this.state.title}</Card.Header>
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body>
          <div className="cardBody">
            {this.state.summary}
            <br />
            {this.state.ratingImage}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Stars />
          <ReviewForm />
        </Card.Footer>
      </Card>
    )
	}
}