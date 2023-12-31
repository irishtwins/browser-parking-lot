import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";

import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';

import NavBar from './Components/NavBar/NavBar';
import ContactForm from './Components/ContactForm/ContactForm';


import './App.css';


function App() {

  let [parkingLotItems, setParkingLotItems] = useState([]);


  function initializePageState() {
      let savedState =localStorage.getItem("items");
      if (typeof savedState === "string") {
          let parsedState = JSON.parse(savedState);
          setParkingLotItems(parsedState);
      };
  }

  useEffect(initializePageState, []);

  function addItem(date, link, description, priority) {
      setParkingLotItems(function (oldItems) {
        let newItems = [
            ...oldItems,    
            {    
              id: nanoid(),    
              date,    
              description,    
              link,    
              priority,
            },
        ];
        localStorage.setItem('items', JSON.stringify(newItems));
        return newItems;
      });
  }


  function deleteItem(id) {
      setParkingLotItems((oldItems) =>
        oldItems.filter((item) => item.id !== id)
      );      
  }

  function editItem(id, date, link, description, priority) {
    
    setParkingLotItems(function (oldItems) {
      let newItems =[];

      for (let item of oldItems) {
        if (item.id === id) {
          newItems.push({
            id,
            date,
            link,
            description,
            priority,
          });
        } else {
          newItems.push(item);
        }
      }

      localStorage.setItem('items', JSON.stringify(newItems));
      return newItems;
    });
  }

  return (
    <div className="App">
      <NavBar />
      <h1 className="header">BROWSER PARKING LOT</h1>
      <p className="sub-heading">Send most of your browser tabs into retirement.</p>
      <main>
        <ParkingLotForm submitItem={ addItem } />
        <ParkingLotList 
          parkingLotItems={ parkingLotItems } 
          editItem={ editItem }
          deleteItem= { deleteItem }/>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
 
export default App;
