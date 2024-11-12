import './Universities.css';
import NavAdmin from '../../../components/Admin/NavAdmin/NavAdmin.jsx';
import Header from '../../../components/Common/Header/Header.jsx';
import TableData from '../../../components/Admin/TableData/TableData.jsx';
import Footer from '../../../components/Common/Footer/Footer.jsx';
import UniversityForm from '../../../components/Admin/Forms/University/UniversityForm.jsx';
import SportForm from '../../../components/Admin/Forms/Sport/SportForm.jsx';
import Modal from '../../../components/Admin/Forms/ModalForm/Modal.jsx';
import React, { useEffect, useState } from 'react';
import useFetch from "../../../hooks/useFetch.js";

const Universities = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeForm, setActiveForm] = useState(null);

    const openModal = (form) => {
        setActiveForm(form);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveForm(null);
    };


    const universityColumns = [
        { name: 'Nombre', selector: (row) => row.name, sortable: true },
        {
            name: 'Ubicación',
            selector: (row) => row.location,
            cell: (row) => (
                <div style={{ lineHeight: '2.0', textAlign: 'start', whiteSpace: 'normal', wordWrap: 'break-word', wordBreak: 'break-word' }}>
                    {row.location}
                </div>
            ),
        },
    ];


    const sportsColumns = [
        { name: 'Deporte', selector: (row) => row.name, sortable: true },
    ];

    const actionsForTable = ['update', 'delete'];


    const { data: universitiesData, loading: loadingUniversities, error: errorUniversities } = useFetch('http://localhost:3000/api/universities/getAll');
    const { data: sportsData, loading: loadingSports, error: errorSports } = useFetch('http://localhost:3000/api/sports/getAll');

    useEffect(() => {
        if (universitiesData) {
            console.log('Universities:', universitiesData);
        }
        if (sportsData) {
            console.log('Sports:', sportsData);
        }
    }, [universitiesData, sportsData]);

    return (
        <section className='admin-universities-page-container'>
            <NavAdmin />
            <Header message={'Agrega universidades que están participando en tu torneo'} />
            <main className='admin-universities-view-content'>
                <section className='universities-table-section'>
                    <button onClick={() => openModal('form1')} className='add-btn-doc add-btn-doc-universities'>
                        <i className='fa-solid fa-file-circle-plus'></i>
                    </button>
                    {loadingUniversities ? (
                        <p>Cargando datos de universidades...</p>
                    ) : errorUniversities ? (
                        <p>Error al cargar datos: {errorUniversities}</p>
                    ) : (
                        <TableData
                            title={<h3 className='table-title'>Universidades involucradas en tu torneo</h3>}
                            columnsName={universityColumns}
                            data={universitiesData}
                            actions={actionsForTable}
                        />
                    )}
                </section>

                <section className='sports-table-section'>
                    <button onClick={() => openModal('form2')} className='add-btn-doc add-btn-doc-sports'>
                        <i className='fa-solid fa-file-circle-plus'></i>
                    </button>
                    {loadingSports ? (
                        <p>Cargando datos de deportes...</p>
                    ) : errorSports ? (
                        <p>Error al cargar datos: {errorSports}</p>
                    ) : (
                        <TableData
                            title={<h3 className='table-title'>Deportes en los que tu universidad está involucrada</h3>}
                            columnsName={sportsColumns}
                            data={sportsData}
                            actions={actionsForTable}
                        />
                    )}
                </section>

                <Modal show={isModalOpen} onClose={closeModal}>
                    {activeForm === 'form1' && <UniversityForm onClose={closeModal} />}
                    {activeForm === 'form2' && <SportForm onClose={closeModal} />}
                </Modal>
            </main>
            <Footer />
        </section>
    );
};

export default Universities;
