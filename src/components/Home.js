import React from "react";
import '../home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Attractions from './Attractions';
import Restaurants from './Restaurants';
import { Modal } from "react-bootstrap";
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';



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
            places: {},
            // showDescriptionModal: false,
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
            if (this.props.auth0.isAuthenticated) {
                const res = await this.props.auth0.getIdTokenClaims()
                const jwt = res.__raw;
                const config = {
                  headers: { "Authorization": `Bearer ${jwt}` },
                }
            let url = `${process.env.REACT_APP_SERVER}/attractions?searchQuery=${this.state.name}`;
            // let url = `http://localhost:3001/attractions?searchQuery=${this.state.name}`;
            console.log(url);
            let attractionsResponse = await axios.get(url, config);
            console.log(attractionsResponse.data);
            this.setState({
                displayInfo: true,
                attractionData: attractionsResponse.data,
            })}
        } catch (error) {
            this.setState({
                errorModal: true,
            })
        }
    }

    displayRestaurants = async () => {


        try {
            if (this.props.auth0.isAuthenticated) {
                const res = await this.props.auth0.getIdTokenClaims()
                const jwt = res.__raw;
                const config = {
                  headers: { "Authorization": `Bearer ${jwt}` },
                }
            let url = `${process.env.REACT_APP_SERVER}/restaurants?searchQuery=${this.state.name}`;
            // let url = `http://localhost:3001/restaurants?searchQuery=${this.state.name}`;
            console.log(url);
            let restaurantsResponse = await axios.get(url, config);
            console.log(restaurantsResponse.data);
            this.setState({
                displayInfo: true,
                restaurantData: restaurantsResponse.data,
            })}
        } catch (error) {
            this.setState({
                errorModal: true,
            })
        }
    }

    postPlaces = async (newPlaces) => {
        try {
            if (this.props.auth0.isAuthenticated) {
                const res = await this.props.auth0.getIdTokenClaims()
                const jwt = res.__raw;
                const config = {
                    headers: { "Authorization": `Bearer ${jwt}`
                },
            }
            let url = `${process.env.REACT_APP_SERVER}/places`;
            // await axios.post(url, newPlaces)
            const response = await axios.post(url, newPlaces, config)
            this.setState({ places: [...this.state.places, response.data] })
        }
        }
    catch(err) { console.error(err) }
}

    

    closeErrorModal = () => {
        this.setState({
            errorModal: false
        });
    };

    render() {
        return (
            <>
                <Form className="searchForm" onSubmit={this.handleSubmit}>
                    <Form.Group className="formItems" >
                        <Form.Label className="formHeader" >Search City:</Form.Label>
                        <Form.Control className="searchBar" type="text" placeholder="Enter location" onChange={this.searchInput} />
                        <Form.Text className="formText">
                            Please enter the name of desired location.
                        </Form.Text>
                    </Form.Group>
                    <Button className="formButton" type="submit">Search</Button>
                </Form>

                {this.state.displayInfo &&
                <>

                        {this.state.attractionData.length>0? <Attractions
                            attractionData={this.state.attractionData}
                            postPlaces={this.postPlaces} />:<h2> Loading... </h2>}
                        {this.state.restaurantData.length>0?<Restaurants
                        
                            restaurantData={this.state.restaurantData}
                            postPlaces={this.postPlaces} />:<h2>  </h2>}
                    </>
                }

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

export default withAuth0(Home);