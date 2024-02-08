import { Row } from 'react-bootstrap';
import Comment from './../Comment';

const CommentList = ( {comments} ) => {
  return (
    <>
        <h2>Comentários:</h2>
        <Row>
            {comments.map(comment => <Comment key={comment.id} {...comment}></Comment>)}
        </Row>
    </>
  )
}

export default CommentList