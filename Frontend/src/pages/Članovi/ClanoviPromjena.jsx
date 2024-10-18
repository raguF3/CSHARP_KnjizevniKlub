import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { useEffect, useState } from "react";
import ClanService from "../../services/ClanService"; // Uvezi servis za članove

export default function ClanoviPromjena() {
    const navigate = useNavigate();
    const routeParams = useParams();
    const [clan, setClan] = useState({
        ime: '',
        prezime: '',
        email: '',
        lozinka: '',
        administrator: false
    });

    async function dohvatiClana() {
        const odgovor = await ClanService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        setClan(odgovor.poruka);
    }

    useEffect(() => {
        dohvatiClana();
    }, []); // Dodaj prazan niz za ovisnosti

    async function promjena(clan) {
        const odgovor = await ClanService.promjena(routeParams.sifra, clan);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        navigate(RoutesNames.CLAN_PREGLED); // Preusmjeri na pregled članova
    }

    async function obrisi() {
        const potvrda = window.confirm("Jeste li sigurni da želite obrisati ovog člana?");
        if (!potvrda) return;

        const odgovor = await ClanService.obrisi(clan); // Koristi novi metod za brisanje
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        navigate(RoutesNames.CLAN_PREGLED); // Preusmjeri na pregled članova nakon brisanja
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const podaci = new FormData(e.target);

        promjena({
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime'),
            email: podaci.get('email'),
            lozinka: podaci.get('lozinka'),
            administrator: podaci.get('administrator') === 'true'
        });
    }

    return (
        <Container>
            <h2>Promjena člana</h2>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="ime" 
                        required 
                        defaultValue={clan.ime} 
                    />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="prezime" 
                        required 
                        defaultValue={clan.prezime} 
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        required 
                        defaultValue={clan.email} 
                    />
                </Form.Group>

                <Form.Group controlId="lozinka">
                    <Form.Label>Lozinka</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="lozinka" 
                        required 
                        defaultValue={clan.lozinka} 
                    />
                </Form.Group>

                <Form.Group controlId="administrator">
                    <Form.Check 
                        type="checkbox" 
                        label="Administrator" 
                        name="administrator" 
                        checked={clan.administrator} 
                        onChange={(e) => setClan({ ...clan, administrator: e.target.checked })} 
                    />
                </Form.Group>

                <hr />
                <Row>
                    <Col xs={6}>
                        <Link to={RoutesNames.CLAN_PREGLED} className="btn btn-danger siroko">
                            Odustani
                        </Link>
                    </Col>
                    <Col xs={6}>
                        <Button variant="primary" type="submit" className="siroko">
                            Promjeni člana
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="danger" onClick={obrisi} className="siroko mt-3">
                            Obriši člana
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
