import { Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ClanService from '../../services/ClanService'; 
export default function ClanoviPregled() {
    const [clanovi, setClanovi] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function dohvatiClanove() {
            const odgovor = await ClanService.get(); 
            if (odgovor && !odgovor.greska) {
                setClanovi(odgovor.poruka); 
            } else {
                alert('Greška prilikom učitavanja članova: ' + odgovor.poruka);
            }
            setLoading(false);
        }

        dohvatiClanove();
    }, []); 

    if (loading) {
        return <Container>Učitavanje...</Container>;
    }

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
                    {clanovi.length > 0 ? (
                        clanovi.map((clan) => (
                            <tr key={clan.sifra}>
                                <td>{clan.sifra}</td>
                                <td>{clan.ime}</td>
                                <td>{clan.prezime}</td>
                                <td>{clan.email}</td>
                                <td>{clan.lozinka}</td>
                                <td>{clan.administrator ? 'Da' : 'Ne'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">Nema dostupnih članova.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}
