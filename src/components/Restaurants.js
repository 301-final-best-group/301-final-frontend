import React from "react";
import Restaurant from './Restaurant';


class Restaurants extends React.Component {
    render() {
        return (
            <>
                <h2>Restaurants</h2>
                <ul>
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
                </ul>

            </>
        )
    }
}

export default Restaurants;