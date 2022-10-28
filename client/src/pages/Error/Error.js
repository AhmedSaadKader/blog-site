import { Link } from "react-router-dom";
import error404 from "../../assets/images/not-found.svg";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.errorDiv}>
      <img src={error404} alt="Not Found" className={styles.errorImg} />
      <h2>Ohh! page not found!</h2>
      <p>We can't seem to find the page you are looking for</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
