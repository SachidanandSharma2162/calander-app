import React from "react";
import dayjs from "dayjs";
import DayCell from "./Daycell";

const Calendar = ({ currentDate, events }) => {
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();

  const daysInMonth = [];
  for (let i = 0; i < startDay; i++) daysInMonth.push(null);

  for (let i = 1; i <= endOfMonth.date(); i++) {
    const date = dayjs(new Date(currentDate.year(), currentDate.month(), i));
    const dayEvents = events.filter((event) =>
      dayjs(event.date).isSame(date, "day")
    );
    daysInMonth.push({ date, events: dayEvents });
  }

  return (
    <div className="grid grid-cols-7 gap-4 px-4 py-2">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div
          key={d}
          className="text-center font-medium text-gray-500 text-sm uppercase tracking-wide"
        >
          {d}
        </div>
      ))}

      {daysInMonth.map((item, index) => (
        <div key={index}>
          {item ? (
            <DayCell
              date={item.date}
              isToday={item.date.isSame(dayjs(), "day")}
              events={item.events}
            />
          ) : (
            <div className="border h-24" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
