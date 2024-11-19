import {Link} from 'react-router-dom'
import './NavAccess.css'

const NavAccess = () => {
    return (
        <div className={'menu-example'}>
            <button><Link to="/admin/home">Home </Link></button>
            <button><Link to="/admin/register">Crear Cuenta </Link></button>
            <button><Link to="/admin/login">Iniciar Sesión </Link></button>
        </div>
    )
}
export default NavAccess