import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RoutesNames } from '../constants';
import { useNavigate } from 'react-router-dom';

export default function NavBarKnjizevniKlub() {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Književni Klub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate(RoutesNames.HOME)}>Početna</Nav.Link>
            <Nav.Link href="https://raguf3-001-site1.ktempurl.com/swagger/index.html" target='_blank'>Swagger</Nav.Link>
            <NavDropdown title="Sadržaj" id="basic-nav-dropdown">
               
              <NavDropdown.Item onClick={() => navigate(RoutesNames.DOLAZAK_PREGLED)}>Dolasci</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(RoutesNames.CLANOVI_PREGLED)}>Članovi</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(RoutesNames.SASTANCI_PREGLED)}>Sastanci</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(RoutesNames.KNJIGE_PREGLED)}>Knjige</NavDropdown.Item>
              <NavDropdown.Divider />
              <Nav.Link onClick={()=>navigate(RoutesNames.NADZORNA_PLOCA)}>Nadzorna ploča</Nav.Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
