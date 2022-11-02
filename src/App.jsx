import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ToDo from './components/ToDo/ToDo';
import Header from './components/Header/Header';
import SettingsPage from './pages/Settings';
// import SettingsLink from './pages/SettingLink';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />

        <Routes>

          <Route exact path='/' element={
            <>
              <ToDo />
            </>
          }>
          </Route>

          <Route path='/settings' element={<SettingsPage />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
