import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarKnjizevniKlub from './components/NavBarKnjizevniKlub';
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './Pages/Pocetna'
import DolasciPregled from './pages/Dolasci/DolasciPregled.jsx'


function App() {


  return (
    <>
      <NavBarKnjizevniKlub />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />
        <Route path={RoutesNames.DOLAZAK_PREGLED} element ={<DolasciPregled />} />


      </Routes>
    </>
  )
}

export default App
