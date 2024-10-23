import { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import SastanakService from "../../services/SastanakService";
import { RoutesNames } from "../../constants";

export default function SastanciPromjena() {
    const navigate = useNavigate();
    const { sifra } = useParams(); 
    const [sastanak, setSastanak] = useState({});

    async function dohvatiSastanak() {
        try {
            const odgovor = await SastanakService.getSastanakBySifra(sifra);
            setSastanak(odgovor); 
        } catch (error) {
            alert("Greška prilikom dohvata sastanka: " + error.message);
        }
    }

    useEffect(() => {
        dohvatiSastanak();
    }, [sifra]);

    async function promjena(e) {
        e.preventDefault(); 
        try {
            await SastanakService.promijeniSastanak(sifra, sastanak);
            navigate(RoutesNames.SASTANCI_PREGLED); 
        } catch (error) {
            alert("Greška prilikom promjene sastanka: " + error.message);
        }
    }

    async function obrisiSastanak() {
        if (window.confirm("Jeste li sigurni da želite obrisati ovaj sastanak?")) {
            try {
                await SastanakService.obrisiSastanak(sifra);
                alert("Sastanak je uspješno obrisan.");
                navigate(RoutesNames.SASTANCI_PREGLED); 
            } catch (error) {
                alert("Greška prilikom brisanja sastanka: " + error.message);
            }
        }
    }

    function obradiSubmit(e) {
        e.preventDefault();
        const podaci = new FormData(e.target);
        setSastanak({
            knjiga: podaci.get("knjiga"),
            mjesto: podaci.get("mjesto"),
            datum: podaci.get("datum"),
        });
        promjena(e);
    }

    return (
        <Container>
            <h1>Promjena sastanka</h1>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="sifra">
                    <Form.Label>Šifra</Form.Label>
                    <Form.Control
                        type="text"
                        name="sifra"
                        readOnly 
                        defaultValue={sifra} 
                    />
                </Form.Group>

                <Form.Group controlId="knjiga">
                    <Form.Label>Knjiga</Form.Label>
                    <Form.Control
                        type="text"
                        name="knjiga"
                        required
                        defaultValue={sastanak.knjiga} 
                    />
                </Form.Group>

                <Form.Group controlId="mjesto">
                    <Form.Label>Mjesto</Form.Label>
                    <Form.Control
                        type="text"
                        name="mjesto"
                        required
                        defaultValue={sastanak.mjesto} 
                    />
                </Form.Group>

                <Form.Group controlId="datum">
                    <Form.Label>Datum</Form.Label>
                    <Form.Control
                        type="date"
                        name="datum"
                        required
                        defaultValue={sastanak.datum} 
                    />
                </Form.Group>

                <Row className="mt-3">
                    <Col>
                        <Link to={RoutesNames.SASTANCI_PREGLED} className="btn btn-danger">
                            Odustani
                        </Link>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Promijeni sastanak
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={obrisiSastanak}>
                            Obriši sastanak
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
