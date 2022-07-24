
import './App.css';
import { Slider } from './components/Slider/Slider';
import { Nav } from './components/Nav/Nav';
import { LastesMovies } from './components/LastesMovies/LastesMovies';
import { Routes, Route} from "react-router-dom";
import { MovieView } from './components/MovieView/MovieView';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <h2 className="title">Recently Added</h2>
              <Slider />
              <LastesMovies />
            </>
          } />
          <Route path="/movie/:id" element={<MovieView />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
