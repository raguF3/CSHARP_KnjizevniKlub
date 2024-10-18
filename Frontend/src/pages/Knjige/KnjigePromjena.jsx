import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import KnjigaService from "../../services/KnjigaService"; 
import { RoutesNames } from "../../constants";

export default function KnjigePromjena() {
    const navigate = useNavigate();
    const routeParams = useParams(); 
    const [knjiga, setKnjiga] = useState({
        naziv: '',
        autor: '',
        godina: ''
    });

    async function dohvatiKnjigu() {
        const odgovor = await KnjigaService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            alert(`Greška: ${odgovor.poruka}`);
            return;
        }
        setKnjiga(odgovor.poruka);
    }

    useEffect(() => {
        dohvatiKnjigu();
    }, []); 

    async function promjena(knjiga) {
        const odgovor = await KnjigaService.promjena(routeParams.sifra, knjiga);
        if (odgovor.greska) {
            alert(`Greška: ${odgovor.poruka}`);
            return;
        }
        navigate(RoutesNames.KNJIGA_PREGLED);
    }

    async function obrisi() {
        const odgovor = await KnjigaService.obrisi(routeParams.sifra); 
        if (odgovor.greska) {
            alert(`Greška: ${odgovor.poruka}`);
            return;
        }
        navigate(RoutesNames.KNJIGA_PREGLED);
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const { naziv, autor, godina } = e.target.elements;

        promjena({
            naziv: naziv.value,
            autor: autor.value,
            godina: godina.value
        }); 
    }

    return (
        <Container>
            <h2>Promjena knjige</h2>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control
                        type="text"
                        name="naziv"
                        required
                        defaultValue={knjiga.naziv}
                    />
                </Form.Group>

                <Form.Group controlId="autor">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        type="text"
                        name="autor"
                        required
                        defaultValue={knjiga.autor}
                    />
                </Form.Group>

                <Form.Group controlId="godina">
                    <Form.Label>Godina</Form.Label>
                    <Form.Control
                        type="number"
                        name="godina"
                        required
                        defaultValue={knjiga.godina}
                    />
                </Form.Group>

                <hr />
                <Row>
                    <Col xs={6}>
                        <Link to={RoutesNames.KNJIGA_PREGLED} className="btn btn-danger siroko">
                            Odustani
                        </Link>
                    </Col>
                    <Col xs={6}>
                        <Button variant="primary" type="submit" className="siroko">
                            Promijeni knjigu
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Button variant="danger" onClick={obrisi} className="mt-3">
                Obriši knjigu
            </Button>
        </Container>
    );
}
