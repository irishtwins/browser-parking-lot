import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import ParkingLotForm from '../ParkingLotForm/ParkingLotForm';



export default function ParkingLotItem({ id, date, priority, link, description, deleteItem, editItem}) {
  

  const [isEdit, setEdit] =useState(false);

  function handleDelete() {
    deleteItem(id);
  }

  function handleEdit() {
    setEdit(true);
  }

  function handleCancel() {
    setEdit(false);
  }

  function updateItem(date, link, description, priority) {
    editItem(id, date, link, description, priority);
    handleCancel();
  }

  const ReadOnlyCardContentJsx = (
    <>
     <CardHeader className="card-header">
        {date}
        <Button className="delete-button" onClick={handleDelete}> X </Button>
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">
          {description}
        </CardTitle>
        <CardText>
          Priority: {priority}
        </CardText>
          <a href={link} target='_blank'>
            <Button className="link-button">link</Button>
          </a>
          <div className="edit-button-container">
            <Button className="edit-button action-button" onClick={handleEdit}>edit</Button>
          </div>
      </CardBody>
    </>
  );

  const EditCardContentJsx = (
    <>
      <ParkingLotForm submitItem={updateItem} defaultDate={date} defaultPriority={priority} defaultLink={link} defaultDescription={description} />
      <Button className="action-button" onClick={handleCancel}>cancel</Button>
    </>
  );

  return (

    <Card
      className="my-2 parking-lot-item-container"
      color="dark"
      inverse
    >
      { isEdit ? EditCardContentJsx : ReadOnlyCardContentJsx }
    </Card>
  );
}

