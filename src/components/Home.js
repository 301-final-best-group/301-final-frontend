import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../data.json';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cityName: [],

    //     }
    // }

    // searchInput = (e) => {

    // }

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
                    <Button type="submit" >Search</Button>
                </Form>
            </>
        )
    }
}

export default Home;