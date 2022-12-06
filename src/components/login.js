import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useHistory, Redirect } from 'react-router-dom';


function Login () {

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //const valPass = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;

        if (email === '' || password === '') {
            swal(
                <h2>Los campos no pueden estar vacios!</h2>
            )
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swal(
                <h2>Por favor ingresar un email valido</h2>
            )
            return;
        }

       /* if (password !== '' && !valPass.test(password)) {
            console.log("El password debe contener: Mayuscula, minuscula, numero y algun caracter especial");
            return;
        } */

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swal(
                <h2>Credenciales incorrectas</h2>
            )
        }
        
        axios
            .post('https://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swal(
                    <h2>Ingresaste correctamente!</h2>
                )
                const tokenRec = res.data.token;
                sessionStorage.setItem('token', tokenRec);
                history.push('/listado');
            })

    }

    let token = sessionStorage.getItem('token');

    return (
        <>
            { token && <Redirect to="/listado" /> }
            
            <div className="container">
                <div className="row">
                    <div className='col-md-12 min-vh-100 d-flex flex-column justify-content-center'>
                        <div className="row">
                            <div className='col-lg-6 col-md-8 mx-auto'>
                                
                                        <div className="card rounded shadow shadow-sm">
                                            <div className="card-header">
                                                <h3 className="mb-0">Login</h3>
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={handleSubmit} className="form" autoComplete="off">
                                                    <div className="form-group">
                                                        <label for="email">Username</label>
                                                        <input type="email" id="email" name="email" placeholder="challenge@alkemy.org" className="form-control form-control-lg rounded-0" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="password">Password</label>
                                                        <input type="password" id="password" name="password" placeholder="react" className="form-control form-control-lg rounded-0" />
                                                    </div>
                                                    <button type="submit" class="btn btn-primary btn-lg float-left mt-2">Login</button>
                                                </form>
                                            </div>
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login