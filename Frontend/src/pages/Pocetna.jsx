import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Pocetna() {
    return (
        <Container className="text-center">
            <Row className="mt-5">
                <Col>
                    <h1>Dobrodošli u Književni Klub!</h1>
                    <p>Uživajte u istraživanju novih knjiga i druženju s drugim ljubiteljima književnosti.</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Statistika</Card.Title>
                            <Card.Text>
                                Broj članova: 27 <br />
                                Broj knjiga: 27 <br />
                                Nadolazeći sastanci: 3
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Preporučene knjige</Card.Title>
                            <Card.Text>
                                - The sun and her flowers, Rupi Kaur <br />
                                - The Chalk Man, C.J. Tudor <br />
                                - Moriarty,Anthony Horowitz
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Nadolazeći sastanci</Card.Title>
                            <Card.Text>
                                - 25.10.2024 - Tema: Klasici <br />
                                - 31.10.2024 - Tema: Noviteti
                            </Card.Text>
                            <Link to="/sastanci">
                                <Button variant="primary">Pogledaj sve sastanke</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
