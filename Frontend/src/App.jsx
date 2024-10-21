import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarKnjizevniKlub from './components/NavBarKnjizevniKlub';
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './Pages/Pocetna'
import DolasciPregled from './pages/Dolasci/DolasciPregled.jsx'
import SastanciPregled from './pages/Sastanci/SastanciPregled.jsx'
import ClanoviPregled from './pages/Clanovi/ClanoviPregled.jsx'
import KnjigePregled from './pages/Knjige/KnjigePregled.jsx'
import Login from "./pages/Login"

function App() {


  return (
    <>
      <NavBarKnjizevniKlub />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />
        <Route path={RoutesNames.DOLAZAK_PREGLED} element ={<DolasciPregled />} />
        <Route path={RoutesNames.SASTANAK_PREGLED} element ={<SastanciPregled />} />
        <Route path={RoutesNames.CLAN_PREGLED} element={<ClanoviPregled />} />
        <Route path={RoutesNames.KNJIGA_PREGLED} element ={<KnjigePregled />} />
        


      </Routes>
    </>
  )
}

export default App
