import './TrainsPage.css';
import React, {useEffect, useState} from 'react';
import NavAdmin from '../../../components/Admin/NavAdmin/NavAdmin.jsx';
import Header from '../../../components/Common/Header/Header.jsx';
import TableData from '../../../components/Admin/TableData/TableData.jsx';
import TrainingForm from '../../../components/Admin/Forms/TrainForm/TrainingForm.jsx';
import useFetch from "../../../hooks/useFetch.js";
import {URLS} from "../../../utils/serverRoutes.js";
import {TRAINS_TBL} from "../../../config/tables.js";


const TrainsPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [trainData, setTrainsData] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const {
        data: fetchedTrainsData,
        loading: loadingTrains,
        error: errorTrains,
        overFetch: fetchTrains,
    } = useFetch(URLS.trainURLS.fetchAll);

    useEffect(() => {
        if (fetchedTrainsData) setTrainsData(fetchedTrainsData);
    }, [fetchedTrainsData]);

    const headersColumns = [
        {
            name: 'Fecha',
            selector: (row) => {
                if (!row.date) return 'Sin fecha';
                const date = new Date(row.date);


                const day = String(date.getUTCDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const yearShort = String(date.getFullYear()).slice(-2);

                return `${day}/${month}/${yearShort}`;
            },
            sortable: true
        },

        {name: 'Hora', selector: (row) => row.time},
        {
            name: 'Deporte',
            selector: (row) => {
                if (!row || !row.sport) {
                    return 'Sin deporte';
                }
                return row.sport.name;
            },
        },

        {name: 'Lugar', selector: (row) => row.location},

        {name: 'Estado', selector: (row) => row.status, sortable: true},
    ];


    const actionsForTable = ['update', 'delete', 'visibility'];

    return (
        <section className={'admin-trainings-page-container'}>
            <NavAdmin/>
            <Header message={'Visualiza tus eventos deportivos transcurriendo'}/>
            <main className={'admin-trainings-view-content'}>
                <div className='add-btn-doc-container'>
                    <button className='add-btn-doc' onClick={openModal}>
                        <i className='fa-solid fa-file-circle-plus'></i>
                    </button>
                </div>

                {loadingTrains ? (
                    <p>Cargando datos de universidades...</p>
                ) : errorTrains ? (
                    <p>Error al cargar datos: {errorTrains}</p>
                ) : (
                    <TableData
                        data={trainData}
                        columnsName={headersColumns}
                        actions={actionsForTable}
                        urls={URLS}
                        tableName={TRAINS_TBL}
                        refreshData={() => {
                            fetchTrains();
                        }}
                    />)}
            </main>
            <TrainingForm show={isModalOpen} onClose={closeModal} refresh={() => {
                fetchTrains();
            }}/>
        </section>
    );
};

export default TrainsPage;
