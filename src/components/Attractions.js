import React from "react";
import '../results.css';
import { Container } from "react-bootstrap";
import Attraction from './Attraction';


class Attractions extends React.Component {
    render() {
        return (
            <>
                <h2>Attractions</h2>
                <Container className="containerBox">
                    <div className="cardRow">
                        {this.props.attractionData.map((attraction, idx) => {
                            return (
                                <Attraction
                                    key={idx}
                                    name={attraction.name}
                                    address={attraction.address}
                                    description={attraction.description}
                                    images={attraction.images[0]}
                                    attraction={attraction}
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

export default Attractions;