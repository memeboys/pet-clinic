import React, { useState } from 'react';
import classes from './SidebarInfo.module.scss';
import Vector_1 from '../../assets/icons/Vector-1.svg';
import Vector_2 from '../../assets/icons/Vector-2.svg';

type PropTypes = {
  header: string,
  text: string
};

const SidebarBlock: React.FC<PropTypes> = ({ header, text }) => {
  const [offset, setOffset] = useState(0);
  const handleLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 280;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 280;

      return Math.max(newOffset, -560);
    });
  };

  return (
    <div className={classes.block}>
      <header className={classes.header}>
        {header}
      </header>
      <main className={classes.main}>
        <input className={classes.svg_l} onClick={handleLeftClick} type="image" src={Vector_1} alt="стрелка" />
        <div
          className={classes.al_div_container}
          style={{ transform: `translateX(${offset}px)` }}
        >
          <span className={classes.span}>
            { text }
          </span>
          <span className={classes.span}>
            { text }
          </span>
          <span className={classes.span}>
            { text }
          </span>
        </div>
        <input className={classes.svg} onClick={handleRightClick} type="image" src={Vector_2} alt="стрелка" />
      </main>
    </div>
  );
};

export default SidebarBlock;
