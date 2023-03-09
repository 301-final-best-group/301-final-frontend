import React from "react";
import '../results.css';
import { Button, Card } from "react-bootstrap";

class Attraction extends React.Component {
    render() {
        return (
            <Card className="card">
                <Card.Img src={this.props.images ? this.props.images : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Church_of_light.jpg/1280px-Church_of_light.jpg"} alt={this.props.name} className="cardImg" />
                <Card.Title className="cardTitle">{this.props.name}</Card.Title>
                <Card.Text className="cardAddress" >{this.props.address}</Card.Text>
                {/* <Card.Text>{this.props.description}</Card.Text> */}
                <Button className="addButton" onClick={() => this.props.postPlaces(this.props.attraction)}>Add to My Bucket</Button>

            </Card>
        )
    }
};

export default Attraction;

