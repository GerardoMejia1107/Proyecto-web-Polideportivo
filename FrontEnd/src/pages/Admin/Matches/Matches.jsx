import React from 'react';

import './Matches.css';
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import TableData from "../../../components/Admin/Table/TableData.jsx";


const Matches = () => {
    return (
        <section className="admin-matches-page-container">
            <NavAdmin/>
            <Header message={'Crea y consulta los partidos de tu institución'}/>
            <main className={'admin-matches-view-content'}>
                <TableData/>
            </main>
            <Footer/>
        </section>
    );
};

export default Matches;
