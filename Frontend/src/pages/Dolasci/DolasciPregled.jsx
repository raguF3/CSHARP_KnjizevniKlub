import { Container, Table } from 'react-bootstrap';

export default function DolasciPregled() {
  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>clan</th>
            <th>sastanak</th>
          </tr>
        </thead>
      </Table>


    </Container>
  )
}