import React from 'react';
import Sidebar from './components/Sidebar';
import Pushable from './components/Pushable';
import NetworkPage from './containers/NetworkPage';
import { ThemeProvider } from './hooks/themes';
import { PytorchColors } from './assets/colors';
import MenuItem from './components/Menu/MenuItem';

const containerStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
};

const App: React.FC = () => {
  return (
    <div style={containerStyle} className="App">
      <ThemeProvider colors={PytorchColors}>
        <Sidebar>
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYqqpDwMcpYCwGZrNcRcPov-ttKCuOxrUdUr0FSypc_tEIOSTcw&s'
            }
            alt={'Logo'}
            style={{
              width: '3em',
              height: '3em',
              display: 'block',
              padding: '.5em',
              paddingTop: '1em',
              marginLeft: '1em',
            }}
          />
          <MenuItem name={'Image processor'} style={{ padding: '.5em' }} />
          <MenuItem name={'Network builder'} style={{ padding: '.5em' }} />
        </Sidebar>
        <Pushable>
          <NetworkPage />
        </Pushable>
      </ThemeProvider>
    </div>
  );
};

export default App;
