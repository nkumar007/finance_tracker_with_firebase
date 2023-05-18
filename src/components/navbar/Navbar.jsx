import { Link } from "react-router-dom";

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">MyMoney</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
