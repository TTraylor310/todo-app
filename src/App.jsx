import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ToDo from './components/ToDo/ToDo';
import BigHeader from './components/Header/Header';
import SettingsPage from './pages/Settings';
// import './styles.css';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <BigHeader />
        <Routes>
          <Route exact path='/' element={<ToDo />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
