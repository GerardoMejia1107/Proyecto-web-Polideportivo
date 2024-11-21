import React, {useEffect, useState} from "react";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import "./TrainsPage.css";
import TrainingCard from "../../../components/Common/TrainingCard/TrainingCard.jsx";
import useFetch from "../../../hooks/useFetch.js";
import {URLS} from "../../../utils/serverRoutes.js";

const TrainsPage = () => {
    const [selectedSport, setSelectedSport] = useState("Todos");
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

    const date = new Date()


    return (
        <section className="user-trainings-container">
            <NavVar/>
            <Header message="Mantente informado de los entrenos de la semana de tu disciplina favorita"/>

            <main className="user-trainings-content">
                <h2 className="current-week">Semana Actual: {date.toLocaleDateString()}</h2>

                {/* Selector de deportes */}
                <div className="sport-selector">
                    <label htmlFor="sport-select" className="sport-select-label">
                        Deporte:
                    </label>
                    <select
                        id="sport-select"
                        value={selectedSport}
                        onChange={(e) => setSelectedSport(e.target.value)}
                        className="sport-select"
                    >
                        <option value="Todos">Todos</option>
                        <option value="Voleibol">Voleibol</option>
                        <option value="Baloncesto">Baloncesto</option>
                        <option value="Fútbol Sala">Fútbol Sala</option>
                        <option value="Fútbol 11">Fútbol 11</option>
                    </select>
                </div>

                {/* Tarjetas de entrenamientos */}
                <section className="training-cards-container">

                    {trainData.map((training, index) => {
                        return training.visibility ? (
                            <TrainingCard training={training} key={index} refresh={fetchTrains}/>

                        ) : null; // Si `visibility` no es true, no renderiza nada
                    })}
                </section>


            </main>

            <Footer/>
        </section>
    );
};

export default TrainsPage;
