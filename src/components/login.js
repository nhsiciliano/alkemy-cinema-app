import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';


function Login () {


    const { loginWithFacebook, loginWithGoogle, user, loading, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogle = async () => {
        try {
            await loginWithGoogle()
        } catch (error) {
            console.log(error);
        }
    }

    const handleFacebook = async () => {
        try {
            await loginWithFacebook()
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) return <h1>Loading...</h1>


    return (
        <>  
            {!user && 
                            <div className="container">
                                <div className="row">
                                    <div className='col-md-12 min-vh-100 d-flex flex-column justify-content-center'>
                                        <div className="row">
                                            <div className='col-lg-6 col-md-8 mx-auto'>
                                                
                                                        <div className="card rounded shadow shadow-sm">
                                                            <div className="card-header">
                                                                <h3 className="mb-0">Inicia sesión con</h3>
                                                            </div>
                                                            <div className="card-body">
                                                                <button onClick={handleGoogle} className="btn btn-primary btn-lg float-right mx-2 my-2">Google</button>
                                                                <button onClick={handleFacebook} className="btn btn-primary btn-lg float-right mx-2 my-2">Facebook</button>
                                                            </div>
                                                        </div>
                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            }
            {user &&
                                <div className="container">
                                    <div className="row">
                                        <div className='col-md-12 min-vh-100 d-flex flex-column justify-content-center'>
                                            <div className="row">
                                                <div className='col-lg-6 col-md-8 mx-auto'>
                                                            <div className="card rounded shadow shadow-sm">
                                                                <div className="card-header">
                                                                    <h3 className="mb-0">Bienvenido <em>{user.displayName || user.email}</em></h3>
                                                                    <h4 className="mt-2">Ya puedes navegar por el listado de las
                                                                    ultimas peliculas utilizando la API de The Movie DB</h4>
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
            }
        </>
    )
}

export default Login