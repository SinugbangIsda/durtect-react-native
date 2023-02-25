import moment from "moment";
import React, { useState, useEffect } from "react";

const getDayPeriod = ( data: Number ) => {
  const [ hour , setHour ] = useState<Number>(data);
  
  useEffect(() => {
    setHour(data);
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
