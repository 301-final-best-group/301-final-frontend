import React from "react";
import '../results.css';
import { Container } from "react-bootstrap";
import Restaurant from './Restaurant';


class Restaurants extends React.Component {
    render() {
        return (
            <>
                <h2>Restaurants</h2>
                <Container className="containerBox">
                    <div className="cardRow">
                        {this.props.restaurantData.map((restaurant, idx) => {
                            return (
                                <Restaurant
                                    key={idx}
                                    name={restaurant.name}
                                    address={restaurant.address}
                                    description={restaurant.description}
                                    images={restaurant.images[0]}
                                    restaurant={restaurant}
                                    postPlaces={this.props.postPlaces}

                                />
                            )
                        })}
                    </div>
                </Container>

            </>
        )
    }
}

export default Restaurants;