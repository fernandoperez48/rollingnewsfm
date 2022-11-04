

import CardGroup from 'react-bootstrap/CardGroup';
import NoteNew from './NoteNew';
import { Container } from 'react-bootstrap';

const CardList = () => {
  return (
    <Container className='my-3'>
    <CardGroup>
      <NoteNew />
      <NoteNew />
      <NoteNew />
    </CardGroup>
    </Container>
  )
}

export default CardList