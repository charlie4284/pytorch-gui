import React from 'react';
import styles from './index.module.css';

export type MenuItemType = {
  name: string;
  style?: Record<string, any>;
  callback?: Function;
};

const MenuItem: React.FC<MenuItemType> = ({ name, style, callback }: MenuItemType) => {
  return (
    <li className={styles.item} style={style} onClick={() => (callback ? callback() : console.log('NO ACTION'))}>
      <span className={styles.underbar}>{name}</span>
    </li>
  );
};

export default MenuItem;
