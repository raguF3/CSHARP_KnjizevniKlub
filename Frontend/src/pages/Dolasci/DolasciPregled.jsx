import { Container, Table } from 'react-bootstrap';
import DolazakService from "../../services/DolazakService";
import { useEffect, useState } from 'react';
import useLoading from "../../hooks/useLoading"; 

export default function DolasciPregled() {
  const [dolasci, setDolasci] = useState();

  const { showLoading, hideLoading } = useLoading(); 

  async function dohvatiDolaske() {
    showLoading(); 
    await DolazakService.get()
      .then((odgovor) => {
        setDolasci(odgovor);
        hideLoading(); 
      })
      .catch((e) => {
        console.log(e);
        hideLoading();
      });
  }

  useEffect(() => {
    dohvatiDolaske();
  }, []);

  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>clan</th>
            <th>sastanak</th>
          </tr>
        </thead>
        <tbody>
          {dolasci && dolasci.map((dolazak, index) => (
            <tr key={index}>
              <td>{dolazak.clan}</td>
              <td>{dolazak.sastanak}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
