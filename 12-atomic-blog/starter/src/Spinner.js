import styles from "./Spinner.css";

function Spinner() {
  return (
    <div className={styles.spinnerFullpage}>
      <Spinner />
    </div>
  );
}

export default Spinner;
