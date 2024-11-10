import HeaderAdmin from "../../../components/Admin/HeaderAdmin/HeaderAdmin.jsx";
import React from "react";
import "./Universities.css";
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import Header from "../../../components/Common/Header/Header.jsx";
import UniversityForm from "../../../components/Admin/Forms/University/UniversityForm.jsx"

const Universities = () => {
    return (
        <section className="matches-container">
            <NavAdmin/>
            <Header message={'Visualiza tus eventos deportivos transcurriendo'}/>
           <UniversityForm/> 
            
        </section>
    );
};

export default Universities;
