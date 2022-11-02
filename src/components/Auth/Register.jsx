import classes from "./Auth.module.css";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/api";

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
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      dispatch(register(values));
      history.push("/");
    },
  });

  return (
    <div className={classes.formContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.authForm}>
        <div className={classes.authFormContent}>
          <h2 className={classes.authFormTitle}>CREATE AN ACCOUNT</h2>
          <div className="form-group mt-3">
            <input
              id="username"
              name="username"
              placeholder="Username"
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
            <input
              id="email"
              name="email"
              placeholder="Email Address"
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
            <input
              id="password"
              name="password"
              placeholder="Password"
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
              REGISTER
            </button>
            <p className="text-center">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
