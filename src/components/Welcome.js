import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';

function Welcome() {

    const { user, logout, loading } = useAuth();

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) return <h1>Loading...</h1>

    return (
        <div className="container">
                    <div className="row">
                        <div className='col-md-12 min-vh-100 d-flex flex-column justify-content-center'>
                            <div className="row">
                                <div className='col-lg-6 col-md-8 mx-auto'>
                                            <div className="card rounded shadow shadow-sm">
                                                <div className="card-header">
                                                    <h2 className="mb-0">Bienvenido {user.displayName || user.email}</h2>
                                                    <h3 className="mb-0">Ya puedes navegar por el listado de las
                                                    ultimas peliculas</h3>
                                                    <button className='btn btn-light mt-2'>
                                                        <Link to='/listado'>LISTADO</Link>
                                                    </button>
                                                </div>
                                                <div className="card-body">
                                                    <button onClick={handleLogout} className="btn btn-primary btn-lg float-right mt-2">Logout</button>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Welcome