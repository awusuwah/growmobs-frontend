import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";

/**
 * The component which allows a calendar to be displayed and dates being selected.
 *
 */
const Calendar = ({ inputClass }) => {
  const [selectedDay, setSelectedDay] = useState(undefined);

  /**
   * Handle when the selected day in the calendar changes.
   *
   * @param { Object } day The new day which has been selected in the calendar.
   */
  function handleDayChange(day) {
    setSelectedDay(day);
  }

  return <DayPickerInput className={inputClass} onDayChange={handleDayChange} />;
};

export default Calendar;
