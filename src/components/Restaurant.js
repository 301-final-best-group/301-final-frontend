import React from "react";

class Restaurant extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.address}</p>
                <img src={this.props.images} alt={this.props.name} />
                <p>{this.props.description}</p>
            </div>
        )
    }
};

export default Restaurant;