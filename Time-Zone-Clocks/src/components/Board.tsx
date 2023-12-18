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
        <div key = {index} >
            {clockConfigs.map((config, index): React.ReactNode => {
              <Clock timeZone = {config.timeZone} location ={config.location} />;
            })}
        </div>
    );
};

export default Board