import React from "react";
import '../results.css';
import { Container } from "react-bootstrap";
import Attraction from './Attraction';


class Attractions extends React.Component {
    render() {
        return (
            <>
                <h2>Attraction</h2>
                <Container className="container">
                    <div className="cardRow">
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
                    </div>
                </Container>

            </>
        )
    }
}

export default Attractions;