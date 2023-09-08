import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './ParkingLotForm.css';

export default function ParkingLotForm() {
  return (
      <Form data-bs-theme="dark" className="parking-lot-form">
        <FormGroup className="parking-lot-row">
          <Label for="link-date">
            Date
          </Label>
          <Input
            id="link-date"
            name="date"
            type="date"
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label for= "link-url">
            Link
          </Label>
          <Input
            id="link-url"
            name="url"
            type="url"
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label for="link-description">
Description
          </Label>
          <Input
            id="link-description"
            name="description"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Input
            name="radio-priority"
            type="radio"
            value="High"
            id="prio-high"
          />
          {' '}
          <Label for="prio-high">
            High
          </Label>
          <Input
            name="radio-priority"
            type="radio"
            value="Medium"
            id="prio-medium"
          />
          {' '}
          <Label for="prio-medium">
            Medium
          </Label>
          <Input
            name="radio-priority"
            type="radio"
            value="Low"
            id="prio-low"
          />
          {' '}
          <Label for="prio-low">
            Low
          </Label>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    );
}

/*
        {
            id: nanoid(),
            date: "2023-08-29",
            priority: "Medium", 
            link: "https://react.dev/",
            description: "React documentation and tutorial",
        },
*/