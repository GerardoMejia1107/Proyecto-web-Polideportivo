import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import UcaLogo from "../../../assets/images/UCA.png";
import './HomeDashboard.css'
import HeaderAdmin from "../../../components/Admin/HeaderAdmin/HeaderAdmin.jsx";

const HomeDashboard = ()=>{
    return (
        <section className={'content'}>
            <HeaderAdmin/>
            <main className={'container'}>
                <div className={'main-content'}>

                    <div className={'data-from-db matches'}>
                        <h2>Partidos transcurriendo</h2>
                    </div>
                    <div className={'data-from-db trainings'}>
                        <h2>Entrenamientos transcurriendo</h2>
                    </div>

                </div>
            </main>
        </section>
    );
}

export default HomeDashboard;