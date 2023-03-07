import React from "react";
import Attraction from './Attraction';


class Attractions extends React.Component {
    render() {
        return (
            <>
                <h2>Attraction</h2>
                <ul>
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
                </ul>

            </>
        )
    }
}

export default Attractions;