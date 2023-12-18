import Board from './components/Board';
import Clock from './components/Clock';
import './App.css'

const App: React.FC = () => {
  const clockConfigs = [
    { timezone: 'Europe/Stockholm', location: 'Stockholm' },
    { timezone: 'Europe/Moscow', location: 'Moscow' },
    { timezone: 'Africa/Johannesburg', location: 'Cape Town' },
    // Add more clock configurations as needed
  ];

  return (
    <div>
      <h1>World Clocks</h1>
      <Board clockConfigs={clockConfigs} />
    </div>
  );
};

export default App
