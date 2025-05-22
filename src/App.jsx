import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";
import Calendar from "./components/Calender";

function App() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const goToPrevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const goToNextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header
          month={currentDate.format("MMMM")}
          year={currentDate.format("YYYY")}
          onPrev={goToPrevMonth}
          onNext={goToNextMonth}
        />
        <Calendar currentDate={currentDate} events={events} />
      </div>
    </div>
  );
}

export default App;
