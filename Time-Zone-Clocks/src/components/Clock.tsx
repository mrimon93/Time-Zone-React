import { addSeconds } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

interface ClockProps{
    timeZone: string;
    location: string;
}

const Clock: React.FC<ClockProps> = ({ timeZone, location }) => {
    const[currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const zonedTime = utcToZonedTime(now, timeZone);
            setCurrentTime(addSeconds(zonedTime, 1));
        }, 1000)
    })
}


export default Clock;