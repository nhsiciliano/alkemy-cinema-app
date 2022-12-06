// Libraries
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react"

// Components
import Login from './components/login';
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';

// Styles
import './css/app.css';



function App() {

  const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const favInLocal = localStorage.getItem('favs');
        if(favInLocal !== null) {
            const favArray = JSON.parse(favInLocal);
            setFavourites(favArray);
        }
    }, [])

  const favMovies = localStorage.getItem('favs');

  let tempMoviesFavs;

  if (favMovies === null) {
    tempMoviesFavs = [];
  } else {
    tempMoviesFavs = JSON.parse(favMovies)
  }

  console.log(tempMoviesFavs);

  const addFavourite = e => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview, 
      id: btn.dataset.movieId
    }
    let movieIsInArray = tempMoviesFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    });
    if (!movieIsInArray) {
      tempMoviesFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesFavs));
      setFavourites(tempMoviesFavs);
      console.log("Se agrego la pelicula");
    } else {
      let moviesLeft = tempMoviesFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavourites(moviesLeft);
      console.log("Se elimino la pelicula");
    }

  }

  return (
    <>
      <Header favourites={favourites} />

      <div className='container mt-3'>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/listado" render={ (props) => <Listado addFavourite={addFavourite} {...props} />} />
          <Route path="/detalle" component={Detalle} />
          <Route path="/favoritos" render={ (props) => <Favoritos favourites={favourites} addFavourite={addFavourite} {...props} />} />
          <Route path="/resultados" render={ (props) => <Resultados favourites={favourites} addFavourite={addFavourite} {...props} />} />
        </Switch>
      </div>

      <Footer />
    </>
  );
}

export default App;
