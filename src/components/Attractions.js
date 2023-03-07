import React from "react";
import '../results.css';
import { Container, Row } from "react-bootstrap";
import Attraction from './Attraction';


class Attractions extends React.Component {
    render() {
        return (
            <>
                <h2>Attraction</h2>
                <Container className="container">
                    <Row xs={2} sm={3} md={5}>
                        {this.props.attractionData.map((attraction, idx) => {
                            return (
                                <Attraction
                                    key={idx}
                                    name={attraction.name}
                                    address={attraction.address}
                                    decription={attraction.description}
                                    images={attraction.images}

                                />
                            )
                        })}
                    </Row>
                </Container>

            </>
        )
    }
}

export default Attractions;