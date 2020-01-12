import React, { useState, ReactNode } from 'react';

type Sidebar = {
  children: ReactNode;
  width?: number;
  minWidth?: number;
};

const sidebarStyle = {
  display: 'flex',
  height: '100%',
  transition: 'width .5s',
};

const menuStyle = {
  height: '100%',
  overflow: 'hidden',
  transition: 'width .5s',
};

const openHintStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const Sidebar: React.FC<Sidebar> = ({ children, width = 300, minWidth = 20 }: Sidebar) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={Object.assign({ ...sidebarStyle }, open ? { width: width } : { width: minWidth })}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div style={Object.assign({ ...menuStyle }, open ? { width: width - minWidth } : { width: 0 })}>
        <div style={{ width: width }}>{children}</div>
      </div>
      <div
        style={{
          ...openHintStyle,
          width: minWidth,
          WebkitBoxShadow: '2px 0px 2px 0px rgba(0,0,0,0.2)',
          MozBoxShadow: '2px 0px 2px 0px rgba(0,0,0,0.2)',
          boxShadow: '2px 0px 2px 0px rgba(0,0,0,0.2)',
        }}
      ></div>
    </div>
  );
};

export default Sidebar;
