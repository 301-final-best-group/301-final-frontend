import React from "react";
import { Modal, Container, Form, Button } from "react-bootstrap";

class UpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ""
    }
}

  handleChange = (event) => {
    event.preventDefault();
    console.log("setting", event.target.value)
    this.setState({ notes: event.target.value})
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("VALUE", e.target)
    const updatedPlace = {
      notes: this.state.notes, //
      _id: this.props.placeToUpdate._id
    }
    console.log("updated place ", updatedPlace);
    this.props.putPlace(updatedPlace);
  }


  render() {
    return (
      <Modal show={this.props.showUpdateModal} onHide={this.props.handleCloseUpdateModal}>
        <Modal.Header closeButton><Modal.Title>{this.props.placeToUpdate.name}</Modal.Title></Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="notes">
                <Form.Label>{this.props.placeToUpdate.notes}</Form.Label>
                <Form.Control type="text" placeholder={this.props.placeToUpdate.notes} onChange={this.handleChange}/>
              </Form.Group>
              <Button type="submit" onClick={this.props.handleCloseUpdateModal}>Update Notes</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    )
  }
}

export default UpdateModal;