import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { useEffect, useState } from "react";
import DolazakService from "../../services/DolazakService";

export default function DolazakPromjena() {
    const navigate = useNavigate();
    const routeParams = useParams();
    const [dolazak, setDolazak] = useState({
        clan: '',
        sastanak: ''
    });

    async function obrisi(dolazak) {
        const { clan, sastanak } = dolazak; 
        const odgovor = await DolazakService.obrisi(dolazak); 
        if (odgovor.greska) {
            alert(`Greška: ${odgovor.poruka}`);
            return;
        }
        navigate(RoutesNames.DOLAZAK_PREGLED); 
    }

    async function dohvatiDolazak() {
        
        const odgovor = await DolazakService.get();
        if (odgovor.greska) {
            alert(`Greška: ${odgovor.poruka}`);
            return;
        }

      
        const dolazakData = odgovor.poruka.find(d => d.clan === routeParams.clan && d.sastanak === routeParams.sastanak);
        if (dolazakData) {
            setDolazak(dolazakData);
        } else {
            alert('Dolazak nije pronađen');
        }
    }

    useEffect(() => {
        dohvatiDolazak();
    }, []); 

    async function promjena(dolazak) {
        const odgovor = await DolazakService.promjena(dolazak);
        if (odgovor.greska) {
            alert(`Greška: ${odgovor.poruka}`);
            return;
        }
        navigate(RoutesNames.DOLAZAK_PREGLED);
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const { clan, sastanak } = e.target.elements;

        promjena({
            clan: clan.value,
            sastanak: sastanak.value
        });
    }

    return (
        <Container>
            <h2>Promjena dolaska</h2>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="clan">
                    <Form.Label>Član</Form.Label>
                    <Form.Control type="text" name="clan" required 
                        defaultValue={dolazak.clan} />
                </Form.Group>
                
                <Form.Group controlId="sastanak">
                    <Form.Label>Sastanak</Form.Label>
                    <Form.Control type="text" name="sastanak" required
                        defaultValue={dolazak.sastanak} />
                </Form.Group>

                <hr />
                <Row>
                    <Col xs={6}>
                        <Button variant="danger" onClick={() => obrisi(dolazak)}>
                            Obriši dolazak
                        </Button>
                    </Col>
                    <Col xs={6}>
                        <Link to={RoutesNames.DOLAZAK_PREGLED}
                            className="btn btn-secondary">
                            Odustani
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Button variant="primary" type="submit">
                            Promjeni dolazak
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
