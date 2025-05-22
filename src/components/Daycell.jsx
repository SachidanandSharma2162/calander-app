import React from "react";

const eventColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-pink-200",
  "bg-purple-200",
];

const DayCell = ({ date, isToday, events }) => {
  return (
    <div
      className={`
        flex flex-col justify-start border rounded-xl p-2 h-32 shadow-sm transition-all duration-200 
        ${
          isToday
            ? "bg-blue-100 border-blue-400 shadow-md"
            : "bg-white hover:shadow-md"
        }
      `}
    >
      <div className="text-sm font-semibold text-gray-700 flex justify-between">
        <span>{date.format("ddd")}</span>
        <span>{date.date()}</span>
      </div>

      <div className="mt-2 space-y-1 overflow-hidden">
        {events.slice(0, 2).map((event, idx) => (
          <div
            key={idx}
            className={`${
              eventColors[idx % eventColors.length]
            } text-xs px-2 py-1 rounded-md truncate`}
            title={`${event.title} - ${event.time}`}
          >
            {event.title}
          </div>
        ))}
        {events.length > 2 && (
          <div className="text-[11px] text-gray-500">
            +{events.length - 2} more
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCell;
