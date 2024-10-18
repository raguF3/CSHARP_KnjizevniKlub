import {  Button, Col,Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import DolazakService from "../../services/DolazakService";








export default function DolazakDodaj(){

    const navigate = useNavigate();

    async function dodaj(dolazak){
       // console.log(dolazak);
       // console.log(JSON.stringify(dolazak));
       const odgovor = await DolazakService.dodaj(dolazak);
       if(odgovor.greska){
         alert(odgovor.poruka);
         return;
       }
       navigate(RoutesNames.DOLAZAK_PREGLED);
       

    }

    function obradiSubmit(e){
        e.preventDefault();

        const podaci = new FormData(e.target);

        dodaj({
            clan:podaci.get('clan'),
            sastanak:podaci.get('sastanak')
        });
    }

    return(
        <>
            Dodavanje novog saastanka
            
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="clan">
                    <Form.Label>Član</Form.Label>
                    <Form.Control type="text" name="clan" required/>
                </Form.Group>

                
                <Form.Group controlId="sastanak">
                    <Form.Label>Sastanak</Form.Label>
                    <Form.Control type="text" name="sastanak"/>
                </Form.Group>


            <hr />
             <Row>
                <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                <Link to={RoutesNames.DOLAZAK_PREGLED}
                className="btn btn-danger siroko">
                Odustani
                </Link>
                 </Col>
                <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                <Button variant="primary" type="submit" className="siroko">
                    Dodaj novi sastanak
                </Button>
                </Col>
             </Row>
            </Form>
        </>
    )
}