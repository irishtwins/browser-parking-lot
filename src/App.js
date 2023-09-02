import { useState } from "react";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";

import "./App.css";

function App() {
  let [parkingLotItems, setParkingLotItems] = useState([
      {
          date: "2023-06-27",
          priority: "Low", 
          link: "https://google.com/",
          description: "Ultimate source of truth.",
      },
      {
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
          <ParkingLotList />
      </main>
    </div>
  );
}

export default App;
