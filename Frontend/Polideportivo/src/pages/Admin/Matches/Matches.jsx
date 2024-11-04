
import HeaderAdmin from "../../../components/Admin/HeaderAdmin/HeaderAdmin.jsx";
import TableData from "../../../components/Admin/Table/TableData.jsx";
import './Matches.css'



const Matches = ()=>{
    return (
        <section className={'content'}>
            <HeaderAdmin/>
            <div className="table-container">
                <TableData/>
            </div>
        </section>
    )
}

export default Matches;