import classes from "./Auth.module.css";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/api";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      dispatch(login(values));
      history.push("/");
    },
  });

  return (
    <div className={classes.formContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.authForm}>
        <div className={classes.authFormContent}>
          <h2 className={classes.authFormTitle}>LOG IN</h2>
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
              LOGIN
            </button>
            <p className="text-center">
              <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
