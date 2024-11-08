import UcaLogo from "../../../assets/images/UCA.png";
import NavAdmin from "../NavAdmin/NavAdmin.jsx";
import "./HeaderAdmin.css";

const HeaderAdmin = () => {
  return (
    <section className={"header-container flex"}>
      <NavAdmin />
      <div className={"u-info flex"}>
        <img className={"logo-uca"} src={UcaLogo} alt={"Logo Uca"} />
        <h1 className={"title-uca"}>
          Universidad Centroamericana José Simón Cañas
        </h1>
      </div>
    </section>
  );
};

export default HeaderAdmin;
