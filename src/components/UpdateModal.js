import React from "react";
import { Modal, Container, Form, Button } from "react-bootstrap";

class UpdateModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlace = {
      title: e.target.title.value || this.props.placeToUpdate.title,
      description: e.target.description.value || this.props.placeToUpdate.description,
      status: e.target.status.value || this.props.placeToUpdate.status,
      _id: this.props.placeToUpdate._id
    }
    console.log(updatedPlace);
    this.props.putPlace(updatedPlace);
  }


  render() {
    return (
      <Modal show={this.props.showUpdateModal} onHide={this.props.handleCloseUpdateModal}>
        <Modal.Header closeButton><Modal.Title>Update Notes</Modal.Title></Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>place's Name</Form.Label>
                <Form.Control type="text" placeholder={this.props.placeToUpdate.title} />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>place's description</Form.Label>
                <Form.Control type="text" placeholder={this.props.placeToUpdate.description} />
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