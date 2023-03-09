import React from "react";
import '../profile.css';
import axios from 'axios';
import { Card, Container, Row, Button } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: {},
            showUpdateModal: false,
            placeToUpdate: {}
        }
    }

    componentDidMount() {
        this.getPlaces();
    }


    getPlaces = async () => {
        let url = `${process.env.REACT_APP_SERVER}/places`;
        try {
            const response = await axios.get(url);
            this.setState({ places: response.data });
        } catch (err) {
            console.log(err);
        }
    }

    deletePlace = async (_id) => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/places/${_id}`;
            await axios.delete(url);
            let updatedPlaces = this.state.places.filter(place => place._id !== _id);
            this.setState({ places: updatedPlaces });
        }
        catch (err) { console.error(err) }
    }
    putPlace = async (updatedPlace) => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/places/${updatedPlace._id}`;
            await axios.put(url, updatedPlace);
            console.log(this.state.places)
            const newPlaces = []
            this.state.places.forEach(place => {
                if (place._id === updatedPlace._id) {
                    place.notes = updatedPlace.notes
                }
                newPlaces.push(place)
            });
            this.setState({ places: newPlaces })
        }
        catch (err) { console.error(err); }
    }

    handleShowUpdateModal = (place) => {
        console.log(place)
        this.setState({ showUpdateModal: true, placeToUpdate: place })

    }

    handleCloseUpdateModal = () => {
        console.log('CLOSE UPDATE MODAL FIRED')
        this.setState({ showUpdateModal: false })

    }


    render() {
        return (
            <div className="profileBg">
                <h2>Your Bucketlist:</h2>
                {this.state.places.length > 0 ? (
                    <>
                        <Container >
                            <Row>
                                {this.state.places.map((place) =>
                                    <Card
                                        key={place._id}
                                        id="card"
                                        className="profileCard"
                                    >
                                        <Card.Img
                                            className="profileImg"
                                            src={place.images[0]}
                                            alt={place.name}
                                        />
                                        <Card.Title className="profileTitle" >{place.name}</Card.Title>
                                        <Card.Text className="notes" >{place.notes}</Card.Text>
                                        <div className="profileButtons" style={{ display: "flex" }}>
                                            <Button onClick={() => this.deletePlace(place._id)} className="deleteButton" style={{ marginRight: "10px" }}>NO GO</Button>
                                            <Button onClick={() => this.handleShowUpdateModal(place)} className="updateButton" style={{ marginLeft: "10px" }}> Add Notes</Button>
                                        </div>
                                    </Card>
                                )}
                            </Row>
                        </Container>

                        <UpdateModal
                            placeToUpdate={this.state.placeToUpdate}
                            handleCloseUpdateModal={this.handleCloseUpdateModal}
                            showUpdateModal={this.state.showUpdateModal}
                            putPlace={this.putPlace}
                        />


                    </>

                ) : (
                    <p>Please search for places to visit</p>
                )}
            </div>


        )
    }
}

export default Profile;
  //<Carousel>
  //   {this.state.places.map(place => (
  //     <Carousel.Item key={place._id}>
  //        <img className="placeImg" src={place.images[0]} />
  //       <Carousel.Caption>
  //             <h1>{place.name}</h1>
  //             <p>{place.address}</p>
  //              {/* <p>{place.description}</p> */}
  //         </Carousel.Caption>
  //     </Carousel.Item>
  //  ))}
  //</Carousel>