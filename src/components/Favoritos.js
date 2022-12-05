import { Link, Redirect } from 'react-router-dom'

function Favoritos(props) {

    let token = sessionStorage.getItem('token');
    

    return (
        <>
            { !token && <Redirect to="/" /> }
            <h2 className="title">Favoritos</h2>
            <div className='row'>
                { !props.favourites.length && <h2 className='col-12 text-danger d-flex align-items-center justify-content-center' style={{height: "450px"}}>No tienes ninguna pelicula en favoritos</h2>}
                {
                    props.favourites.map((oneMovie, idx) => {
                        return (
                            <div className="col-3 d-flex" key={idx}>
                                <div className="card my-2 mx-2">
                                    <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
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

export default Favoritos