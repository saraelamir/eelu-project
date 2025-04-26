import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/Logo Icon@2x.png";
import googleIcon from "../assets/google.png";
import loginImage from "../assets/signup.png";

function Login() {
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-image"]}>
        <img src={loginImage} alt="Finance Illustration" />
      </div>

      <div className={styles["login-box"]}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Wealth Wise Logo"
            className={styles["logo-img"]}
          />
          <h1 className={styles["brand-name"]}>WealthWise</h1>
        </div>

        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            required
          />

          <div className={styles.options}>
            <div className={styles["remember-me"]}>
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className={styles.checkbox}
                />
                Remember me
              </label>
            </div>

            <Link to="/forgot-password" className={styles["forgot-password"]}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className={styles["login-btn"]}>
            Login
          </button>
        </form>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <button type="button" className={styles["google-btn"]}>
          <img
            src={googleIcon}
            alt="Google"
            className={styles["google-icon"]}
          />
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
}

export default Login;
