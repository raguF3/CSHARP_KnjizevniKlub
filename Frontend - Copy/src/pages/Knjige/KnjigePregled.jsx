import { Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import KnjigaService from '../../services/KnjigaService'; 

export default function KnjigePregled() {
    const [knjige, setKnjige] = useState([]); 

    async function dohvatiKnjige() {
        const odgovor = await KnjigaService.get(); 
        if (odgovor) {
            setKnjige(odgovor);
        } else {
            alert('Došlo je do greške prilikom dohvata knjiga.'  + odgovor.poruka);
        }
    }

    useEffect(() => {
        dohvatiKnjige(); 
    }, []);

    return (
        <Container>
            <h2>Pregled knjiga</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Šifra</th>
                        <th>Naziv</th>
                        <th>Autor</th>
                        <th>Godina</th>
                    </tr>
                </thead>
                <tbody>
                    {knjige.map(knjiga => (
                        <tr key={knjiga.sifra}>
                            <td>{knjiga.sifra}</td>
                            <td>{knjiga.naziv}</td>
                            <td>{knjiga.autor}</td>
                            <td>{knjiga.godina}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
