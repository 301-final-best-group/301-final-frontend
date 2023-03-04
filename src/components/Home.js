import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Data from '../data.json';
import { Card } from "react-bootstrap";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            // location_id: '',
            // name: '',
            // description: '',
            // address: '',
            // image_url: [],
            data: Data
        }
    }

    searchInput = (e) => {
        e.preventDefault();
        this.setState({
            // name: cityName,
            displayInfo: true
        })
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



    render() {
        return (
            <>
                <h1>Home Page</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city, country" />
                        <Form.Text className="text-muted">
                            Please enter city and country.
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={this.searchInput} type="submit" >Search</Button>
                </Form>

                <Card style={{ width: '18rem' }}>
                    {
                        this.state.data.map((obj, idx) => 
                        < Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.state.data.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                        )}
                </Card>
            </>
        )
    }
}

export default Home;