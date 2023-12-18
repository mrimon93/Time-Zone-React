import React from 'react';
import Clock from './Clock';

interface BoardProps {
  clockConfigs: { timezone: string; location: string }[];
}

const Board: React.FC<BoardProps> = ({ clockConfigs }) => {
  return (
    <div>
      {clockConfigs.map(({ timezone, location }, index): React.ReactNode => (
        <div key={index}>
          <Clock timezone={timezone} location={location} />
        </div>
      ))}
    </div>
  );
};

export default Board;
