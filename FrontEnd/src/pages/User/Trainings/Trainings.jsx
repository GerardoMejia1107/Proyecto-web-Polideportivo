import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";

import React from "react";

const Trainings = ()=>{
    return (
        <div className={'history-container'}>
            <NavVar/>
            <Header message={'Mantente informado de los entrenos de la semana de tu disciplina favorita'}/>
            <main className={'content-from-main'}>

            </main>
            <Footer/>
        </div>
    )
}

export default Trainings