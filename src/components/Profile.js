import React from "react";
import axios from 'axios';
import {Card, Container, Row, Button } from "react-bootstrap";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: {}
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
    catch(err) { console.error(err) }
}



    render() {
        return (
            <>
                <h2>Your places to visit</h2>
                {this.state.places.length > 0 ? (
                    <>
                       


                        <Container >
                            <Row>
                            {this.state.places.map((place) =>
                                    <Card 
                                    key={place._id}
                                    id="card" 
                                    style={{ width: '18rem', height: '30rem' }}>
                                        <Card.Img
                                            style={{ height: '18rem' }}
                                            src={place.images[0]}
                                            alt={place.name}
                                            // onClick={this.handleModalWindow}
                                        />
                                    <Card.Title as='h2'>{place.name}</Card.Title>
                                    <Card.Text>{place.address}</Card.Text>
                                    {/* <Card.Text>{place.description}</Card.Text> */}
                                    <div style={{display: "flex"}}>
                                    <Button onClick={() => this.deletePlace(place._id)}variant="danger"  style={{marginRight: "10px"}}>NO GO</Button>
                                    <Button variant='success' style={{marginLeft: "10px"}}> Add Notes</Button>
                                    </div>
                                    </Card>
                                )}
                            </Row>
                        </Container>



                    </>

                ) : (
                    <h2>Please search for places to visit</h2>
                )}
            </>


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