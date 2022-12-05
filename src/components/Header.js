import { Link } from 'react-router-dom';
import Buscador from './Buscador';
import Logout from './Logout';



function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary px-4">
            <Link className="navbar-brand text-white" href="/">Cinema Alkemy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active text-white" to="/">Home</Link>
                    <Link className="nav-item nav-link text-white" to="/listado">Listado</Link>
                    <Link className="nav-item nav-link text-white" to="/favoritos">Favoritos</Link>
                    <span className="nav-item nav-link text-white">
                        {
                            props.favourites.length > 0 && <>Peliculas en favoritos: {props.favourites.length}</>
                        }
                    </span>
                </div>
            </div>
            <Logout />
            <Buscador />
        </nav>
    )
}

export default Header