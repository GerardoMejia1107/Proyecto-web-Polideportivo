/* eslint-disable no-unused-vars */
import "./LogInPage.css";
import NavAccess from "../../../components/Admin/NavAdmin/NavAccess.jsx";
import { useState, useEffect } from "react";
import usePost from "../../../hooks/usePost.js";
import { URLS } from "../../../utils/serverRoutes.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {
    postData,
    loading: postLoading,
    error: postError,
  } = usePost(`${URLS.loginURLS.post}`);

  const loginUser = async (e) => {
    e.preventDefault();
    if ((await postData(data))) {
      toast.success("logged in successfully");
      navigate("/admin/home");
      setData({
        name: "",
        email: "",
        password: "",
      });

    } else {
      navigate("/login");
      toast.error(postError);
    }
  };

  return (
    <>
      <NavAccess />
      <section className={"login-container"}>
        <form onSubmit={loginUser} className="login-form">
          <div>
            <label className="label-form">Email: </label>
            <input
              className="login-input"
              type={"email"}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              placeholder={"ingresa tu correo"}
            />
          </div>

          <div>
            <label className="label-form">Contraseña: </label>
            <input
              className="login-input"
              type={"password"}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              placeholder={"ingresa tu contraseña"}
            />
          </div>

          <button type={"submit"} className="submit-btn">Iniciar Sesión</button>
        </form>
      </section>
    </>
  )
};

export default LogInPage;
