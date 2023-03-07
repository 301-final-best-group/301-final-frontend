import React from "react";
import { Container, Row } from "react-bootstrap";
import Restaurant from './Restaurant';


class Restaurants extends React.Component {
    render() {
        return (
            <>
                <h2>Restaurants</h2>
                <Container>
                    <Row xs={2} sm={3} md={5}>
                        {this.props.restaurantData.map((restaurant, idx) => {
                            return (
                                <Restaurant
                                    key={idx}
                                    name={restaurant.name}
                                    address={restaurant.address}
                                    decription={restaurant.description}
                                    images={restaurant.images}

                                />
                            )
                        })}
                    </Row>
                </Container>

            </>
        )
    }
}

export default Restaurants;