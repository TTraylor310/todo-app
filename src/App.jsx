import {useContext} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {When} from 'react-if';
import ToDo from './components/ToDo/ToDo';
import BigHeader from './components/Header/Header';
// import { SettingsContext } from './Context/Settings/Settings';
import SettingsPage from './pages/Settings';
import { AuthContext } from './components/Auth/Auth';


const App = () => {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <Router>
      <BigHeader />
      <When condition={isLoggedIn}>
        <Routes>
          <Route exact path='/' element={<ToDo />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </When>
    </Router>
  );
}

export default App;
