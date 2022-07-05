import React, { useState } from 'react';
import classes from './SidebarInfo.module.scss';
import Vector_1 from '../../assets/icons/Vector-1.svg';
import Vector_2 from '../../assets/icons/Vector-2.svg';

const SidebarInfo: React.FC = () => {
  const [offsetNews, setOffsetNews] = useState(0);
  const handleLeftClickNews = () => {
    setOffsetNews((currentOffset) => {
      const newOffset = currentOffset + 280;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightClickNews = () => {
    setOffsetNews((currentOffset) => {
      const newOffset = currentOffset - 280;

      return Math.max(newOffset, -560);
    });
  };

  const [offsetDiscounts, setOffsetDiscounts] = useState(0);
  const handleLeftClickDiscounts = () => {
    setOffsetDiscounts((currentOffset) => {
      const newOffset = currentOffset + 280;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightClickDiscounts = () => {
    setOffsetDiscounts((currentOffset) => {
      const newOffset = currentOffset - 280;

      return Math.max(newOffset, -560);
    });
  };

  const [offsetStocks, setOffsetStocks] = useState(0);
  const handleLeftClickStocks = () => {
    setOffsetStocks((currentOffset) => {
      const newOffset = currentOffset + 280;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightClickStocks = () => {
    setOffsetStocks((currentOffset) => {
      const newOffset = currentOffset - 280;

      return Math.max(newOffset, -560);
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <header className={classes.header}> Новости </header>
        <main className={classes.main}>
          <input className={classes.svg_l} onClick={handleLeftClickNews} type="image" src={Vector_1} alt="стрелка" />
          <div
            className={classes.al_div_container}
            style={{ transform: `translateX(${offsetNews}px)` }}
          >
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
          </div>
          <input className={classes.svg} onClick={handleRightClickNews} type="image" src={Vector_2} alt="стрелка" />
        </main>
      </div>
      <div className={classes.block}>
        <header className={classes.header}> Скидки! </header>
        <main className={classes.main}>
          <input className={classes.svg_l} onClick={handleLeftClickDiscounts} type="image" src={Vector_1} alt="стрелка" />
          <div
            className={classes.al_div_container}
            style={{ transform: `translateX(${offsetDiscounts}px)` }}
          >
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
          </div>
          <input className={classes.svg} onClick={handleRightClickDiscounts} type="image" src={Vector_2} alt="стрелка" />
        </main>
      </div>
      <div className={classes.block}>
        <header className={classes.header}> Акции! </header>
        <main className={classes.main}>
          <input className={classes.svg_l} onClick={handleLeftClickStocks} type="image" src={Vector_1} alt="стрелка" />
          <div
            className={classes.al_div_container}
            style={{ transform: `translateX(${offsetStocks}px)` }}
          >
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
            <span className={classes.span}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...
            </span>
          </div>
          <input className={classes.svg} onClick={handleRightClickStocks} type="image" src={Vector_2} alt="стрелка" />
        </main>
      </div>
    </div>
  );
};

export default SidebarInfo;
