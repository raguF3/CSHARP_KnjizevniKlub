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
            console.error("Greška prilikom dohvata sastanaka: "+ odgovor.poruka);
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
                        <th>Mjesto</th>
                        <th>Datum</th>
                    </tr>
                </thead>
                <tbody>
                    {sastanci && sastanci.map((sastanak) => (
                        <tr key={index}>
                            <td>{sastanak.sifra}</td>
                            <td>{sastanak.knjiga}</td> 
                            <td>{sastanak.mjesto}</td>
                            <td>{sastanak.datum}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
