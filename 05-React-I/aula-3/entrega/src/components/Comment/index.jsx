import { Row, Col } from "react-bootstrap"

const Comment = ( {autor, conteudo, data} ) => {
  return (
    <Col md='6'>
        <Row className="my-3">
            <Col sm='3'>
                <img src={autor.foto} alt={autor.nome} className="w-100"/>
            </Col>
            <Col sm='9'>
                <h3 className="text-end">{new Date(data).toLocaleDateString()}</h3>
                <p className="texto">{conteudo}</p>
            </Col>
        </Row>
        

    </Col>
  )
}

export default Comment