import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const NoteNew = () => {
  return (
    <Card className='m-1'>
        <Card.Img variant="top" src="/logo192.png" />
        <Card.Body>
          <Card.Title>Note</Card.Title>
          <Card.Text>
            Aqui va articulo de noticia
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Ir a noticia</Button>{' '}
        </Card.Footer>
      </Card>
  )
}

export default NoteNew