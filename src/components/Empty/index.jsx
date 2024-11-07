import PropTypes from "prop-types";
import styles from "./Empty.module.css";

export default function Empty({ text }) {
  return <div className={styles.empty}>{text}</div>;
}

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};
