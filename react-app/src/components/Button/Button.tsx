/*import React from "react";
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}
const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
*/
/*
// [Exercise: Showing an Alert]
// When clicking the button, an alert shows up.
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}
const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
*/
// [Exercise: Using CSS Modules]
import styles from './Button.module.css'
// When clicking the button, an alert shows up.
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}
const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;