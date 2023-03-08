import React from "react";
import '../results.css';
import { Button, Card } from "react-bootstrap";

class Attraction extends React.Component {
    render() {
        return (
            <Card className="card">
                <Card.Img src={this.props.images} alt={this.props.name} />
                <Card.Title className="cardTitle">{this.props.name}</Card.Title>
                <Card.Text className="cardAddress" >{this.props.address}</Card.Text>
                <Card.Text>{this.props.description}</Card.Text>
                <Button onClick={() => this.props.postPlaces(this.props.attraction)}>Add</Button>
            </Card>
        )
    }
};

export default Attraction;