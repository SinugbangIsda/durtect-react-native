import moment from "moment";
import React, { useState, useEffect } from "react";

const getDayPeriod = () => {
  const getCurrentHour = moment().hour();
  const [ hour , setHour ] = useState<Number>(getCurrentHour);
  
  useEffect(() => {
    setHour(getCurrentHour);
  }, [hour])

  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening"
  }
}

export default getDayPeriod;
