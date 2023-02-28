import { Card, Col, Nav, Row } from "react-bootstrap";
import imgItem from "../../../assets/imagehomepage/adminpage.png";
import "./NewItem.scss";
function NewItem() {
  return (
    <div className="newitem">   
      <Nav className="nav-list">
        <Nav.Item>
          <Nav.Link className="text-white" href="#">
            NEW RELEASES
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-white" href="#">
            MOVIES
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-white" href="#">
            TV SERIES
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-white" href="#">
            CARTOONS
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className="list-item">
        <Col>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default NewItem;
