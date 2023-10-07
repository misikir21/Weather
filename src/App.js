import { Route, Routes } from 'react-router-dom';
import ShowAll from './components/HomePage';
import CityDetails from './components/DetailPage';
import PageNotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowAll />} />
        <Route path="/details/:cityId" element={<CityDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
