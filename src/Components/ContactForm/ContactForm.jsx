import React from 'react'
import { Col, Row, Form, Button, FormGroup, Label, Input } from 'reactstrap';


export default function Contact() {
    return (
        <Form id="contact">
         <Row>
          <Col md={6}>
           <FormGroup>
             <Label for="full-name">
              Full Name
             </Label>
             <Input
              id="full-name"
              name="full-name"
              type="text"
             />
           </FormGroup>
          </Col>
          <Col md={6}>
           <FormGroup>
             <Label for="email">
               Email
             </Label>
             <Input
               id="email"
               name="email"
               type="email"
             />
           </FormGroup>
          </Col>
         </Row>
          <FormGroup>
             <Label for="phone">
               Phone Number
             </Label>
             <Input
               id="phone"
               name="phone"
               type ="phone"
             />
          </FormGroup>
        <Button type="submit">
            SUBMIT
        </Button>
       </Form>
    );
}