import { Container } from "react-bootstrap";
import Menu from "./Menu";
import MovieInTheater from "./Theater/MovieInTheater";
import { Route, Switch } from 'react-router-dom'
import IndiaMovie from "./India/IndiaMovie";
import ComingSoon from "./ComingSoon/ComingSoon";
import TopRated from "./TopRated/TopRated";
import Faviourites from "./Faviourites/Faviourites";
import MovieDetails from "./services/MovieDetails";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Container className="my-5">
         <main>
          <Switch>
            <Route path= "/movieintheater">
          <MovieInTheater />
          </Route>
          <Route path= "/comingsoon">
          <ComingSoon />
          </Route>
          <Route path= "/topIndia">
          <IndiaMovie />
          </Route>
          <Route path= "/toprated">
          <TopRated />
          </Route>
          <Route path= "/faviourites">
          <Faviourites />
          </Route>
          <Route path= "/movie/data/:title">
          <MovieDetails />
          </Route>
          </Switch>
        </main>
      </Container>
    </div>
  );
}
 
export default App;
