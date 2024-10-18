import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../hooks/useAuth';


export default function Login() {
    const { login } = useAuth();
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
      login({
        email: podaci.get('email'),
        password: podaci.get('lozinka'),
      });
    }
  
    return (
      <Container className='mt-4'>
          <p>
              email: raguz.leaa@gmail.com
          </p>
          <p>
              lozinka: edunovawp4
          </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='text'
              name='email'
              placeholder='raguz.leaa@gmail.com'
              maxLength={255}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='lozinka'>
            <Form.Label>Lozinka</Form.Label>
            <Form.Control type='password' name='lozinka' required />
          </Form.Group>
          <Button variant='primary' className='gumb' type='submit'>
            Autoriziraj
          </Button>
        </Form>
      </Container>
    );
  }