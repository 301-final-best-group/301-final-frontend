import React from "react";
import '../results.css';
import { Button, Card } from "react-bootstrap";

class Restaurant extends React.Component {
    render() {
        return (
            <Card className="card">
                <Card.Img src={this.props.images ? this.props.images : "https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={this.props.name} className="cardImg" />
                <Card.Title className="cardTitle">{this.props.name}</Card.Title>
                <Card.Text className="cardAddress">{this.props.address}</Card.Text>
                {/* <Card.Text>{this.props.description}</Card.Text> */}
                <Button className="addButton" onClick={() => this.props.postPlaces(this.props.restaurant)}>Add to My Bucket</Button>
            </Card>
        )
    }
};

export default Restaurant;