import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Attractions from './Attractions';
import Restaurants from './Restaurants';
import { Modal } from "react-bootstrap";
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            name: '',
            // cityData: {},
            attractionData: [],
            restaurantData: [],
            errorModal: false,

        }
    }

    searchInput = (e) => {
        let cityName = e.target.value;
        this.setState({
            name: cityName,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.displayAttractions();
        this.displayRestaurants();
        this.setState({
            displayInfo: true,

        })
    }

    displayAttractions = async () => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/attractions`
            let attractionsResponse = await axios.get(url)
            console.log(attractionsResponse.data);
            this.setState({
                displayInfo: true,
                attractionData: attractionsResponse.data,
            })
        } catch(error) {
            this.setState({
                errorModal: true,
            })
        }
    }

    displayRestaurants = async () => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/restaurants`
            let restaurantsResponse = await axios.get(url)
            console.log(restaurantsResponse.data);
            this.setState({
                displayInfo: true,
                restaurantData: restaurantsResponse.data,
            })
        } catch(error) {
            this.setState({
                errorModal: true,
            })
        }
    }

    // handleDisplaySearch = async (e) => {
    //     try {
    //         let response = await axios.get(`${process.env.REACT_APP_SERVER}`);
    //         console.log(response.data);
    //     }
    //     catch (error) {
    //         this.setState({})
    //     }
    // }

    closeErrorModal = () => {
        this.setState({
            errorModal: false
        });
    };

    render() {
        return (
            <>
                <h1>Home Page</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Search City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city, country" onChange={this.searchInput} />
                        <Form.Text className="text-muted">
                            Please enter city and country.
                        </Form.Text>
                    </Form.Group>
                    <Button  type="submit">Search</Button>
                </Form>

                {this.state.displayInfo &&
                <>
                <Attractions attractionData={this.state.attractionData}/>
                <Restaurants restaurantData={this.state.restaurantData}/>
                </>
                };

                <Modal
                    show={this.state.errorModal}
                    onHide={this.closeErrorModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>You've entered an invalid response. Please try again.</p>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default Home;