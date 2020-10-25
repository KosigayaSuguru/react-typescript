import React, { useState } from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const BootstrapTest: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState<string>('firstName');

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  return (
    <Container className="bg-dark text-light">
      <Row>
        {[1, 2, 3, 5, 6, 7, 8, 9, 10].map(item => <Col key={item}>{item} of all</Col>)}
      </Row>

      <Form className="pt-2 pb-2 pl-5 pr-5" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" value={firstName} onChange={handleOnChange} required />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a First name.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
              <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};