import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ToDo from './components/ToDo/ToDo';
import BigHeader from './components/Header/Header';
import SettingsPage from './pages/Settings';
import Auth from './components/Auth/Auth';
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
        <>
        <Auth capability="read">
        <p>I can read!</p>
        </Auth>
        <Auth capability="create">
        <p>I can create!</p>
        </Auth>
        <Auth capability="update">
        <p>I can update!</p>
        </Auth>
        <Auth capability="delete">
        <p>I can delete!</p>
        </Auth>
        </>
      </div>
    </Router>
  );
}

export default App;
