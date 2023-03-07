import React from "react";
import '../results.css';
import { Card } from "react-bootstrap";

class Attraction extends React.Component {
    render() {
        return (
            <Card className="card">
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>{this.props.address}</Card.Text>
                <Card.Img src={this.props.images} alt={this.props.name} />
                <Card.Text>{this.props.description}</Card.Text>
            </Card>
        )
    }
};

export default Attraction;