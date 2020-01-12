import React, { ReactNode } from 'react';
import useTheme from '../../hooks/themes';
import style from './index.module.css';

interface MenuType {
  image?: string;
  children?: ReactNode;
}

const Menu: React.FC<MenuType> = ({ image, children }: MenuType) => {
  const colors = useTheme();
  return (
    <div
      style={{
        background: colors.background,
        color: colors.text,
        display: 'flex',
        height: '3em',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {image && <img src={image} alt={'Logo'} style={{ height: '2em', padding: '.5em' }} />}
      <ul className={style.menu}>{children}</ul>
    </div>
  );
};

export default Menu;
