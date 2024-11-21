import React, {useEffect, useState} from 'react';
import './MatchesPage.css';
import NavAdmin from '../../../components/Admin/NavAdmin/NavAdmin.jsx';
import Header from '../../../components/Common/Header/Header.jsx';
import Footer from '../../../components/Common/Footer/Footer.jsx';
import TableData from '../../../components/Admin/TableData/TableData.jsx';
import MatchForm from '../../../components/Admin/Forms/MatchForm/MatchForm.jsx';
import useFetch from "../../../hooks/useFetch.js";
import {URLS} from "../../../utils/serverRoutes.js";
import {NEW_MATCHES_TBL} from "../../../config/tables.js";

const MatchesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matchData, setMatchData] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const {
        data: fetchedMatchesData,
        loading: loadingMatches,
        error: errorMatches,
        overFetch: fetchMatches,
    } = useFetch(URLS.matchURLS.fetchAll);

    useEffect(() => {
        if (fetchedMatchesData) setMatchData(fetchedMatchesData);
    }, [fetchedMatchesData]);


    const headersColumns = [
        {name: 'Fecha', selector: (row) => row.date, sortable: true},
        {name: 'Hora', selector: (row) => row.time},
        {name: 'Deporte', selector: (row) => row.sport.name, sortable: true},
        {
            name: 'Universidad 1', selector: (row) => row.universityHome.name, cell: (row) => (
                <div
                    style={{
                        lineHeight: "2.0",
                        textAlign: "start",
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                    }}
                >
                    {row.universityHome.name}
                </div>
            ),
        },
        {name: 'Marcador Univ. 1', selector: (row) => row.homeScore},
        {
            name: 'Universidad 2', selector: (row) => row.universityAway.name, cell: (row) => (
                <div
                    style={{
                        lineHeight: "2.0",
                        textAlign: "start",
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                    }}
                >
                    {row.universityAway.name}
                </div>
            ),
        },
        {name: 'Marcador Univ. 2', selector: (row) => row.awayScore},
        {name: 'Estado', selector: (row) => row.status}

    ];

    const actionsForTable = ['update', 'delete', 'visibility'];

    return (
        <section className='admin-matches-page-container'>
            <NavAdmin/>
            <Header message={'Crea y consulta los partidos de tu institución'}/>
            <main className={'admin-matches-view-content'}>
                <div className='add-btn-doc-container'>
                    <button className='add-btn-doc' onClick={openModal}>
                        <i className='fa-solid fa-file-circle-plus'></i>
                    </button>
                </div>

                {
                    loadingMatches ? (<p>Cargando partidos...</p>) : errorMatches ? (
                        <p>Error al cargar partidos: {errorMatches}</p>
                    ) : (
                        <TableData
                            columnsName={headersColumns}
                            data={matchData}
                            actions={actionsForTable}
                            urls={URLS}
                            tableName={NEW_MATCHES_TBL}
                            refreshData={() => {
                                fetchMatches()
                            }}

                        />
                    )
                }
            </main>
            <Footer/>
            <MatchForm show={isModalOpen} onClose={closeModal}/>
        </section>
    );
};

export default MatchesPage;
