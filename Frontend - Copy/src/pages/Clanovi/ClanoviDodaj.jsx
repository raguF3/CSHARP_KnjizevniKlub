import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { useState } from "react";
import ClanService from "../../services/ClanService"; 

export default function ClanoviDodaj() {
    const navigate = useNavigate();
    const [clan, setClan] = useState({
        ime: '',
        prezime: '',
        email: '',
        lozinka: '',
        administrator: false
    });

    async function dodaj(clan) {
        const odgovor = await ClanService.dodaj(clan); 
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        navigate(RoutesNames.CLAN_PREGLED); 
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const podaci = new FormData(e.target);

        dodaj({
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime'),
            email: podaci.get('email'),
            lozinka: podaci.get('lozinka'),
            administrator: podaci.get('administrator') === 'true'
        });
    }

    return (
        <Container>
            <h2>Dodaj novog člana</h2>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="ime" 
                        required 
                        onChange={(e) => setClan({ ...clan, ime: e.target.value })} 
                    />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="prezime" 
                        required 
                        onChange={(e) => setClan({ ...clan, prezime: e.target.value })} 
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        required 
                        onChange={(e) => setClan({ ...clan, email: e.target.value })} 
                    />
                </Form.Group>

                <Form.Group controlId="lozinka">
                    <Form.Label>Lozinka</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="lozinka" 
                        required 
                        onChange={(e) => setClan({ ...clan, lozinka: e.target.value })} 
                    />
                </Form.Group>

                <Form.Group controlId="administrator">
                    <Form.Check 
                        type="checkbox" 
                        label="Administrator" 
                        name="administrator" 
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
                            Dodaj člana
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
