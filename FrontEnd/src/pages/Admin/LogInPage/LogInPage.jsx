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
    if (!(await postData(data))) {
      toast.error(postError);
    } else {
      toast.success("User created successfully");
      navigate("../home");
      setData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <NavAccess />
      <section className={"form-container"}>
        <form onSubmit={loginUser}>
          <div>
            <label>Email: </label>
            <input
              type={"email"}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              placeholder={"ingresa tu correo"}
            />
          </div>

          <div>
            <label>Contraseña: </label>
            <input
              type={"password"}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              placeholder={"ingresa tu contraseña"}
            />
          </div>

          <button type={"submit"}>Iniciar Sesión</button>
        </form>
      </section>
    </>
  );
};

export default LogInPage;
