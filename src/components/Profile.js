import React from "react";
import Attractions from "./Attractions";
import Restaurants from "./Restaurants";
// import axios from 'axios';

class Profile extends React.Component {

    handleRender = (e) => {
        e.preventDefault();
        const newPlaces ={
          images: e.target.images.value,
          name: e.target.name.value,
          address: e.target.address.value,
          description: e.target.description.value,
        };
        this.props.postBook(newPlaces);
        e.target.reset();
      };

    render() {
        return (
            <>
            <p>Profile</p>
            {this.props.displayInfo &&
                    <>
                        <Attractions
                            attractionData={this.props.attractionData}
                            postPlaces={this.postPlaces} />
                        <Restaurants
                            restaurantData={this.props.restaurantData}
                            postPlaces={this.postPlaces} />
                    </>
                }
            </>
        )
    }
}

export default Profile;

// {/* <Card className="card">
//                 <Card.Img src={this.props.images} alt={this.props.name} className="cardImg" />
//                 <Card.Title className="cardTitle">{this.props.name}</Card.Title>
//                 <Card.Text className="cardAddress" >{this.props.address}</Card.Text>
//                 <Card.Text>{this.props.description}</Card.Text>
//                 <Button onClick={() => this.props.postPlaces(this.props.attraction)}>Add</Button>

//             </Card> */}