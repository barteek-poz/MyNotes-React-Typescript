import styles from "./Button.module.css";

const Button: React.FC<{
  children: string | number
  onClick?: () => void ;
}> = (props) => {
  return <button className={styles.button} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
