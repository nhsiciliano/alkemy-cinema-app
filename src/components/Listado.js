import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from '@sweetalert/with-react';



function Listado(props) {


    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=c02f636a594ac60f26e44c121c6488cc&language=es-ES&page=1';
        axios
            .get(endPoint)
            .then(res => {
                const apiData = res.data;
                setMoviesList(apiData.results);
            })
            .catch(error => {
                swal(<h2>Hubo errores, intenta mas tarde.</h2>)
            })
    }, [setMoviesList])

    console.log(moviesList);


    return (
        <>
            <div className='row'>
            {
                moviesList.map((oneMovie, idx) => {
                    return (
                        <div className="col-3 d-flex" key={idx}>
                            <div className="card my-2 mx-2">
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

export default Listado