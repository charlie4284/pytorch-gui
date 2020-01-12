import React from 'react';
import Menu from '../../components/Menu';
import MenuItem from '../../components/Menu/MenuItem';

const containerStyle = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box' as 'border-box', // type casting
  display: 'flex',
  flexDirection: 'column' as 'column',
};

const NetworkPage: React.FC = () => {
  return (
    <div style={containerStyle}>
      <NetworkMenu />
      <NetworkDiagram />
    </div>
  );
};

const NetworkMenu: React.FC = () => {
  return (
    <Menu image="https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png">
      <MenuItem name="Item A" callback={() => console.log('HELLO A')} />
      <MenuItem name="Item B" callback={() => console.log('HELLO B')} />
    </Menu>
  );
};

const NetworkDiagram: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      WOW NETWORK DIAGRAM
    </div>
  );
};

export default NetworkPage;
