import Proptypes from "prop-types";
import styles from "./Container.module.css";

export default function Container({ children }) {
  return <section className={styles.container}>{children}</section>;
}

Container.propTypes = {
  children: Proptypes.node,
};
