
import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarEdunova from './components/NavBarEdunova';
import { Routes } from 'react-router-dom';
import Pocetna from './pages/Pocetna';

function App() {

const [x, setX] = useState(0);

  return (
    <>
      <NavBarEdunova />
      <Routes>
        <Route path={RoutesNames.HOME} element={Pocetna />} />
      </Routes>
    </>
  )
}

export default App
