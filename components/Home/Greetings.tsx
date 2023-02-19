import React from 'react';
import Text from "../Text";
import getDayPeriod from '../../utils/getDayPeriod';

const Greetings = () => {
  const greeting = getDayPeriod();

  return (
    <Text twStyles = "text-2xl font-bold text-black dark:text-white">
      { greeting }
    </Text>
  )
}

export default Greetings;