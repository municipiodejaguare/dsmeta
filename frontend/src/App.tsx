import NotificationButton from "./components/NotificationButton"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function App() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);


  return (
    <>
      <h1>Olá mundo!</h1>
      <NotificationButton></NotificationButton>
      <DatePicker
        selected={minDate}
        onChange={(date: Date) => setMinDate(date)}
        className="dsmeta-form-control"
        dateFormat="dd/MM/yyyy"
      />
      <DatePicker
        selected={maxDate}
        onChange={(date: Date) => setMaxDate(date)}
        className="dsmeta-form-control"
        dateFormat="dd/MM/yyyy"
      />
    </>
  )
}

export default App
