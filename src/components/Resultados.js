import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';

function Resultados(props) {
    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [movieResults, setMovieResults] = useState([]);


    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=c02f636a594ac60f26e44c121c6488cc&language=es-ES&query=${keyword}`;
        axios
            .get(endPoint)
            .then(res => {
                const moviesArray = res.data.results;
                if(moviesArray.length === 0 ) {
                    swal(<h4>Tu busqueda no arrojo resultados</h4>)
                }
                setMovieResults(moviesArray);
            })
            .catch(error => {
                console.log(error);
            })
    }, [keyword]);

    return (
        <>
            { !token && <Redirect to="/" /> }
            <h2>Buscaste: <em>{keyword}</em></h2>
            {movieResults.length === 0 && <h2 className='col-12 text-danger d-flex justify-content-center align-items-center' 
                style={{height: "450px"}}>No hay resultados. Intenta con otra palabra.</h2>}
            <div className='row'>
            {
                movieResults.map((oneMovie, idx) => {
                    return (
                        <div className="col-4 d-flex" key={idx}>
                            <div className="card my-4">
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                                <button 
                                    className='favourite-btn'
                                    onClick={props.addFavourite}
                                    data-movie-id={oneMovie.id}>
                                    🖤
                                    </button>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{oneMovie.title}</h5>
                                    <p className="card-text">{oneMovie.overview.substring(0, 150)}...</p>
                                    <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary mt-auto">View Detail</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Resultados