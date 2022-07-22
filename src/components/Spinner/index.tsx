import React from 'react';
import { Spin, SpinProps } from 'antd';
import classes from './index.module.scss';

const Spinner = (props: SpinProps): JSX.Element => (
  <div className={classes.spinnerContainer}>
    <Spin {...props} />
  </div>
);

export default Spinner;
