// src/components/Calendar.js
import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  // Generate array of days in current month
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const handleDayClick = (day) => {
    console.log("Clicked on day:", day);
    // Add logic to handle click on day
  };

  return (
    <div className="calendar-container">
      <h2>
        {currentDate.toLocaleString("default", { month: "long" })} {currentYear}
      </h2>
      <div className="day-grid">
        {daysArray.map((day) => (
          <div
            key={day}
            className={`day ${
              events.some((event) => event.day === day) ? "has-event" : ""
            } ${day === currentDay ? "today" : ""}`}
            onClick={() => handleDayClick(day)}
          >
            <span className="day-number">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
