import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../core/Auth";
import { getUserByToken, login } from "../core/_request";
import clsx from "clsx";
import { Link } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Formato de correo electrónico incorrecto")
    .required("Correo electrónico es requerido"),
  password: Yup.string().required("Contraseña es requerida"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await login(values.email, values.password);
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.api_token);
        setCurrentUser(user);
      } catch (error) {
        saveAuth(undefined);
        setStatus("Ta mal");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3">Iniciar sesión</h1>
      </div>
      <div className="fv-row mb-10">
        <label className="form-label fs-6 fw-bolder text-dark">Correo electrónico</label>
        <input
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
          type="email"
          name="email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <span className="fv-help-block" role="alert">
              {formik.errors.email}
            </span>
          </div>
        )}
      </div>
      <div className="fv-row mb-10">
        <div className="d-flex flex-stack mb-2">
          <label className="form-label fw-bolder text-dark fs-6 mb-0">
            Contraseña
          </label>
        </div>
        <input
          type="password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.password && formik.errors.password,
            },
            {
              "is-valid": formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <span className="fv-help-block" role="alert">
              {formik.errors.password}
            </span>
          </div>
        )}
      </div>
      <button
        type="submit"
        id="kt_sign_in_submit"
        className="btn btn-lg btn-primary w-100 mb-5"
        disabled={formik.isSubmitting || !formik.isValid}
      >
        {!loading && <span className="indicator-label">Continuar</span>}
        {loading && (
          <span className="indicator-progress" style={{ display: "block" }}>
            Please wait...
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        )}
      </button>
      <div className="text-center mt-4">
        <Link
        to="/auth/forgot-password"
        className="link-primary fs-6 fw-bolder "
      >
        ¿Olvidaste tu contraseña?
      </Link>
      </div>
      
    </form>
  );
};
export { Login };
