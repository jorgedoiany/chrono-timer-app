import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./App.css";
import Clock from "./Components/Clock";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const startTimer = (endDate) => {
    const countDownDate = new Date(endDate).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //Stop the timer
        clearInterval(interval);
        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
      } else {
        //Update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000); // Update every second
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    clearInterval(interval); // Stop previous timer
    startTimer(date); // Start new timer based on selected date
  };

  useEffect(() => {
    startTimer(selectedDate); // Start the timer initially with the selected date
    return () => {
      clearInterval(interval); // Clean up timer on unmount or changes
    };
  }, [selectedDate]);

  return (
    <div className="App">
      <div className="datetime-container">
        <Datetime
          value={selectedDate}
          onChange={handleDateChange}
          className="react-datetime-picker"
        />
      </div>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;
