import styles from "./COntainer.module.css";

export default function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
