import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import KnjigaService from "../../services/KnjigaService"; 
import { RoutesNames } from "../../constants";

export default function KnjigeDodaj() {
    const navigate = useNavigate();
    const [knjiga, setKnjiga] = useState({
        sifra: '',
        naziv: '',
        autor: '',
        godina: ''
    });

    async function dodaj(knjiga) {
        const odgovor = await KnjigaService.dodaj(knjiga);
        if (odgovor.greska) {
            alert(`Greška: ${odgovor.poruka}`);
            return;
        }
        navigate(RoutesNames.KNJIGA_PREGLED); 
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const { sifra, naziv, autor, godina } = e.target.elements;

        dodaj({
            sifra: sifra.value, 
            naziv: naziv.value,
            autor: autor.value,
            godina: godina.value
        });
    }

    return (
        <Container>
            <h2>Dodaj novu knjigu</h2>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="sifra">
                    <Form.Label>Šifra</Form.Label>
                    <Form.Control
                        type="text"
                        name="sifra"
                        required
                        value={knjiga.sifra}
                        onChange={(e) => setKnjiga({ ...knjiga, sifra: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control
                        type="text"
                        name="naziv"
                        required
                        value={knjiga.naziv}
                        onChange={(e) => setKnjiga({ ...knjiga, naziv: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="autor">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        type="text"
                        name="autor"
                        required
                        value={knjiga.autor}
                        onChange={(e) => setKnjiga({ ...knjiga, autor: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="godina">
                    <Form.Label>Godina</Form.Label>
                    <Form.Control
                        type="number"
                        name="godina"
                        required
                        value={knjiga.godina}
                        onChange={(e) => setKnjiga({ ...knjiga, godina: e.target.value })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Dodaj knjigu
                </Button>
            </Form>
        </Container>
    );
}
