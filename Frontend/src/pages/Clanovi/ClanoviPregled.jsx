import { Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ClanService from '../../services/ClanService'; 
export default function ClanoviPregled() {
    const [clanovi, setClanovi] = useState([]); 

    async function dohvatiClanove() {
        const odgovor = await ClanService.get(); 
        if (odgovor) {
            setClanovi(odgovor); 
        } else {
            alert('Greška prilikom učitavanja članova: ' + odgovor.poruka);
        }
    }


    useEffect(() => {
        dohvatiClanove();
    }, []); 



    return (
        <Container>
            <h2>Pregled članova</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>sifra</th>
                        <th>ime</th>
                        <th>prezime</th>
                        <th>email</th>
                        <th>lozinka</th>
                        <th>administrator</th>
                    </tr>
                </thead>
                <tbody>
                    {clanovi && clanovi.map((clan) => (
                            <tr key={clan.sifra}>
                                <td>{clan.sifra}</td>
                                <td>{clan.ime}</td>
                                <td>{clan.prezime}</td>
                                <td>{clan.email}</td>
                                <td>{clan.lozinka}</td>
                                <td>{clan.administrator ? 'Da' : 'Ne'}</td>
                            </tr>
                        ))}
                  
                </tbody>
            </Table>
        </Container>
    );
}
