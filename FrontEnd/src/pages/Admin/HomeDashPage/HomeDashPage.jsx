import React, {useContext, useEffect, useState} from "react";
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import "./HomeDashPage.css";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import MatchEvent from "../../../components/Admin/MatchEvent/MatchEvent.jsx";
import TrainEvent from "../../../components/Admin/TrainEvent/TrainEvent.jsx";
import {UserContext} from "../../../../context/userContext.jsx";
import useFetch from "../../../hooks/useFetch.js";
import {URLS} from "../../../utils/serverRoutes.js";

const HomeDashPage = () => {
    const {user} = useContext(UserContext);
    const [trainData, setTrainsData] = useState([]);
    const {
        data: fetchedTrainsData,
        loading: loadingTrains,
        error: errorTrains,
        overFetch: fetchTrains,
    } = useFetch(URLS.trainURLS.fetchAll);

    useEffect(() => {
        if (fetchedTrainsData) setTrainsData(fetchedTrainsData);
    }, [fetchedTrainsData]);
    const partidos = [
        {
            id: 1,
            equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
            equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
            horario: "14:00",
            lugar: 'Magico Gonazales',
            deporte: "Fútbol",
        },
        {
            id: 2,
            equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
            equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
            horario: "14:00",
            lugar: 'Magico Gonazales',
            deporte: "Fútbol",
        },
        {
            id: 3,
            equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
            equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
            horario: "14:00",
            lugar: 'Magico Gonazales',
            deporte: "Fútbol",
        },
        {
            id: 4,
            equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
            equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
            horario: "14:00",
            lugar: 'Magico Gonazales',
            deporte: "Fútbol",
        },


    ];


    return user ? (
        <section className="admin-home-container">
            <NavAdmin/>
            <Header message={"Visualiza tus eventos deportivos transcurriendo"}/>
            <main className="admin-home-main-content">
                <div className="admin-home-main-section">
                    {/* Sección de Partidos en curso */}
                    <div className="admin-home-matches-section">
                        <h2>Partidos transcurriendo</h2>

                        <div className="admin-home-matches-list">
                            {partidos.map((partido) => (
                                <MatchEvent match={partido} key={partido.id}/>
                            ))}
                        </div>
                    </div>

                    {/* Sección de Entrenamientos en curso */}
                    <div className="admin-home-trainings-section">
                        <h2>Entrenamientos transcurriendo</h2>

                        <div className="admin-home-trainings-list">
                            {trainData.map((entrenamiento) => (
                                <TrainEvent train={entrenamiento} key={entrenamiento._id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </section>
    ) : (<p>Debes iniciar sesión para entrar</p>);
};

export default HomeDashPage;
