import React from 'react'
import Clock from './Clock'

interface BoardProps {
    clockConfigs: {
        timeZone: string;
        location: string;
    }[];
}

const Board: React.FC<BoardProps> = ({ clockConfigs }) => {
    return(
        <div>
            {clockConfigs.map((config, index) => {
              <Clock key = {index} timeZone = {config.timeZone} location {config.location} />
            })}
        </div>
    )
}