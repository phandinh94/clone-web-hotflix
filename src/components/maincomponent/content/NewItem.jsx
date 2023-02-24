import { Card, Col, Nav, Row } from "react-bootstrap";
import imgItem from "../../../assets/imagehomepage/adminpage.png"
import "./NewItem.scss"
function NewItem() {
    return ( <div className="newitem">
        <Nav className="w-80 nav-list">
            <Nav.Item>
                <Nav.Link className="text-white" href="#">NEW RELEASES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-white" href="#">MOVIES</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link className="text-white" href="#">TV SERIES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-white" href="#">CARTOONS</Nav.Link>
            </Nav.Item>
        </Nav>
        <Row mx={1} md={6} className="w-80 g-12 list-item">
      {/* {Array.from({ length: 12 }).map((_, idx) => ( */}
        <Col  >
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">
                Comepmy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">
                Comepmy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">
                Comepmy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">
                Comepmy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">
                Comepmy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="">Card title</Card.Title>
              <Card.Text className="text-warning">
                Comepmy
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    {/* ))}  */}
    </Row>
    </div> );
}

export default NewItem;