import { Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import SastanakService from '../../services/SastanakService'; 

export default function SastanciPregled() {
    const [sastanci, setSastanci] = useState([]);

    async function dohvatiSastanke() {
        try {
            const odgovor = await SastanakService.getSastanci(); 
            setSastanci(odgovor);
        } catch (error) {
            console.error("Greška prilikom dohvata sastanaka: ", error);
        }
    }

    useEffect(() => {
        dohvatiSastanke();
    }, []);

    return (
        <Container>
            <h1>Pregled Sastanaka</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Šifra</th>
                        <th>Knjiga</th>
                        <th>Mesto</th>
                        <th>Datum</th>
                    </tr>
                </thead>
                <tbody>
                    {sastanci.map((sastanak, index) => (
                        <tr key={index}>
                            <td>{sastanak.sifra}</td>
                            <td>{sastanak.knjiga}</td> 
                            <td>{sastanak.mesto}</td>
                            <td>{sastanak.datum}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
