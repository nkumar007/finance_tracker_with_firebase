import { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        <span>displayname:</span>
        <input type="text" onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      <button className="btn">SignUp</button>
    </form>
  );
};

export default SignUp;
