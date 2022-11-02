import classes from "./Register.module.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be atleast 6 characters";
  }

  return errors;
};

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className={classes.formContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.authForm}>
        <div className={classes.authFormContent}>
          <h3 className={classes.authFormTitle}>Sign Up</h3>
          <div className="form-group mt-3">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className="form-control mt-1"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              className="form-control mt-1"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              className="form-control mt-1"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className={classes.actionBtn}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
