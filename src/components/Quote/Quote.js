import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Form, Row, Col} from 'react-bootstrap';

const Quote = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Submit License ID
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} controlId="formFIle">
          <Col sm="10">
            <Form.Control type="file" placeholder="file" />
          </Col>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  export default Quote;
