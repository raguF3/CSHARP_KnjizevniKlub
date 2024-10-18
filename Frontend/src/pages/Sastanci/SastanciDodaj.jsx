import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SastanakService from "../../services/SastanakService";
import { RoutesNames } from "../../constants";

export default function SastanciDodaj() {
    const navigate = useNavigate();
    const [sastanak, setSastanak] = useState({
        sifra: '',
        knjiga: '',
        mjesto: '',
        datum: '',
    });

    async function dodajSastanak(e) {
        e.preventDefault(); 
        try {
            await SastanakService.dodajSastanak(sastanak);
            alert("Sastanak je uspješno dodan.");
            navigate(RoutesNames.SASTANCI_PREGLED); 
        } catch (error) {
            alert("Greška prilikom dodavanja sastanka: " + error.message);
        }
    }

    function obradiSubmit(e) {
        e.preventDefault();
        const podaci = new FormData(e.target);
        setSastanak({
            sifra: podaci.get("sifra"),
            knjiga: podaci.get("knjiga"),
            mjesto: podaci.get("mjesto"),
            datum: podaci.get("datum"),
        });
        dodajSastanak(e);
    }

    return (
        <Container>
            <h1>Dodaj sastanak</h1>
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="sifra">
                    <Form.Label>Šifra</Form.Label>
                    <Form.Control
                        type="text"
                        name="sifra"
                        required
                        value={sastanak.sifra}
                        onChange={(e) => setSastanak({ ...sastanak, sifra: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="knjiga">
                    <Form.Label>Knjiga</Form.Label>
                    <Form.Control
                        type="text"
                        name="knjiga"
                        required
                        value={sastanak.knjiga}
                        onChange={(e) => setSastanak({ ...sastanak, knjiga: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="mjesto">
                    <Form.Label>Mjesto</Form.Label>
                    <Form.Control
                        type="text"
                        name="mjesto"
                        required
                        value={sastanak.mjesto}
                        onChange={(e) => setSastanak({ ...sastanak, mjesto: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="datum">
                    <Form.Label>Datum</Form.Label>
                    <Form.Control
                        type="date"
                        name="datum"
                        required
                        value={sastanak.datum}
                        onChange={(e) => setSastanak({ ...sastanak, datum: e.target.value })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Dodaj sastanak
                </Button>
            </Form>
        </Container>
    );
}
