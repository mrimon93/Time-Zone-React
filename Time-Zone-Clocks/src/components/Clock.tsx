import React, { useState, useEffect } from 'react';
import { format, addSeconds } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

interface ClockProps {
  timezone: string;
  location: string;
}

const Clock: React.FC<ClockProps> = ({ timezone, location }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const zonedTime = utcToZonedTime(now, timezone);
      setCurrentTime(addSeconds(zonedTime, 1)); // Increment the time by 1 second
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div>
      <h2>{location}</h2>
      <p>Timezone: {timezone}</p>
      <p>Current Time: {format(currentTime, 'yyyy-MM-dd HH:mm:ssXXX')}</p>
    </div>
  );
};

export default Clock;
