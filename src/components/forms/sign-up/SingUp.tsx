import React from 'react';
import classes from './SignUp.module.scss';

export const SignUp = () => (
  <form className={classes.form}>
    <h4 className={classes.form_title}>Create new account</h4>
    <span>Email adress</span>
    <input
      type="email"
      className={classes.input}
      placeholder="Email adress"
    />
    <span>First name</span>
    <input
      type="text"
      className={classes.input}
      placeholder="First name"
    />
    <span>Last name</span>
    <input
      name="text"
      className={classes.input}
      placeholder="Last name"
    />
    <span>Password</span>
    <input
      name="password"
      className={classes.input}
      type="password"
      placeholder="Password"
    />
    <span>Confirm Password</span>
    <input
      type="password"
      className={classes.input}
      placeholder="Confirm password"
    />
    <input type="submit" value="Create" />
  </form>
);
