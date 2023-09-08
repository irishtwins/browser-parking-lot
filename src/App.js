import { useState } from "react";
import { nanoid } from "nanoid";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";

import "./App.css";

function App() {
  let [parkingLotItems, setParkingLotItems] = useState([
      {
          id: nanoid(),
          date: "2023-06-27",
          priority: "Low", 
          link: "https://google.com/",
          description: "This is where you can find the ultimate source of truth.",
      },
      {
          id: nanoid(),
          date: "2023-08-29",
          priority: "Medium", 
          link: "https://react.dev/",
          description: "React documentation and tutorial",
      },
  ]);

  return (
    <div className="App">
      <header>
          <h1>Browser Parking Lot</h1>
          <p>Send most of your browser tabs into retirement.</p>
      </header>
      <main>
          <ParkingLotForm />
          <ParkingLotList parkingLotItems={parkingLotItems} />
      </main>
    </div>
  );
}

export default App;
