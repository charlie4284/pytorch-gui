import React, { ReactNode } from 'react';

type Pushable = {
  children: ReactNode;
};

const Pushable: React.FC<Pushable> = ({ children }: Pushable) => {
  return <div style={{ flex: 1, display: 'flex' }}>{children}</div>;
};

export default Pushable;
