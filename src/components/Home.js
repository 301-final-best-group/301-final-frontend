import React from "react";
import '../home.css';
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
            // let url = `${process.env.REACT_APP_SERVER}/attractions?searchQuery=${this.state.name}`;
            let url = `http://localhost:3001/attractions?searchQuery=${this.state.name}`;
            console.log(url);
            let attractionsResponse = await axios.get(url);
            console.log(attractionsResponse.data);
            this.setState({
                displayInfo: true,
                attractionData: attractionsResponse.data,
            })
        } catch (error) {
            this.setState({
                errorModal: true,
            })
        }
    }

    displayRestaurants = async () => {
        try {
            // let url = `${process.env.REACT_APP_SERVER}/restaurants?searchQuery=${this.state.name}`;
            let url = `http://localhost:3001/restaurants?searchQuery=${this.state.name}`;
            console.log(url);
            let restaurantsResponse = await axios.get(url);
            console.log(restaurantsResponse.data);
            this.setState({
                displayInfo: true,
                restaurantData: restaurantsResponse.data,
            })
        } catch (error) {
            this.setState({
                errorModal: true,
            })
        }
    }

    postPlaces = async (newPlaces) => {
        try {
            //   if (this.props.auth0.isAuthenticated) {
            //     const res = await this.props.auth0.getIdTokenClaims()
            //     const jwt = res.__raw;
            //     const config = {
            //       headers: { “Authorization”: `Bearer ${jwt}` },
            //     }
            let url = `${process.env.REACT_APP_SERVER}/places`;
            await axios.post(url, newPlaces)
            // const response = await axios.post(url, newBook, config)
            // this.setState({ places: [...this.state.places, response.data] })
            //   }
        }
        catch (err) { console.error(err) }
    }

    // deleteBook = async (_id) => {
    //     try {
    //       if (this.props.auth0.isAuthenticated) {
    //         const res = await this.props.auth0.getIdTokenClaims()
    //         const jwt = res.__raw;
    //         const config = {
    //           headers: { “Authorization”: `Bearer ${jwt}` },
    //         }
    //       console.log(“DELETE REQUEST RECEIVED”)
    //       let url = `${process.env.REACT_APP_SERVER}/books/${_id}`;
    //       await axios.delete(url, config);
    //       let updatedBooks = this.state.books.filter(book => book._id !== _id);
    //       this.setState({ books: updatedBooks });
    //     }}
    //     catch (err) { console.error(err) }
    //   }

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
                        <Attractions
                            attractionData={this.state.attractionData}
                            postPlaces={this.postPlaces} />
                        <Restaurants
                            restaurantData={this.state.restaurantData}
                            postPlaces={this.postPlaces} />
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

export default Home;