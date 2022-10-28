import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../../components";
import styles from "./Register.module.css";
import { useAppContext } from "../../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, alertText, alertType, displayAlert, clearAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(values);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Logo className={styles.logo} />
        <h3 className={styles.formHeading}>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert style={`${styles.alert} ${styles[alertType]}`} alert={alertText} />}
        {!values.isMember && (
          <FormRow style={styles.inputDiv} type="text" defaultValue={values.name} name="Name" onChange={handleChange} />
        )}
        <FormRow style={styles.inputDiv} type="emil" defaultValue={values.email} name="Email" onChange={handleChange} />
        <FormRow
          style={styles.inputDiv}
          type="password"
          defaultValue={values.password}
          name="Password"
          onChange={handleChange}
        />
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
        {!values.isMember ? (
          <p>
            Already a member?{" "}
            <button type="button" className={styles.isMemberButton} onClick={toggleMember}>
              Login
            </button>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <button type="button" className={styles.isMemberButton} onClick={toggleMember}>
              Register
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
