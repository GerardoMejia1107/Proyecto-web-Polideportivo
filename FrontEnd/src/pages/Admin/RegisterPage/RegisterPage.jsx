/* eslint-disable no-unused-vars */
import { useState } from "react";
import NavAccess from "../../../components/Admin/NavAdmin/NavAccess.jsx";
import "./RegisterPage.css";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import usePost from "../../../hooks/usePost.js";
import { URLS } from "../../../utils/serverRoutes.js";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    postData,
    loading: postLoading,
    error: postError,
  } = usePost(`${URLS.registerURLS.post}`);

  // Initialize state with empty form data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    if (!(await postData(data))) {
      toast.error(postError);
    } else {
      toast.success("User created successfully");
      navigate("/login");
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
        <section className={"register-container"}>
          <form onSubmit={registerUser} className="form-container">
            <div>
              <label className="label-form">Nombre: </label>
              <input
                type="text"
                className="register-input"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                placeholder={"ingresa tu nombre"}
              />
            </div>

            <div>
              <label className="label-form">Email: </label>
              <input
                className="register-input"
                type={"email"}
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                placeholder={"ingresa tu correo"}
              />
            </div>

            <div>
              <label className="label-form">Contraseña: </label>
              <input
                className="register-input"
                type={"password"}
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder={"ingresa tu contraseña"}
              />
            </div>

            <button type={"submit"} className="register-btn">Registrarse</button>
          </form>
        </section>
    </>
  );
};
export default RegisterPage;
