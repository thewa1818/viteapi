import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nuvber from "./NuvberWrap";

// eslint-disable-next-line react/prop-types
const BeerData = ({ fetchData }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <div>
        <Nuvber countCart={count} />
        <Row xs={2} md={4} className="g-5">
          {fetchData.map((item) => (
            <Col key={item.id}>
              <Card
                style={{ width: "15rem", height: "700px" }}
                className="shadow"
              >
                <Card.Img
                  className="p-4"
                  variant="top"
                  width="100%"
                  height="400"
                  src={item.image_url}
                />
                <hr />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>アルコール度数:{item.abv}</Card.Text>
                  <Stack gap={2} className="col-md-10 mx-auto">
                    <Button variant="secondary">今すぐ購入</Button>
                    <Button variant="outline-secondary" onClick={increment}>
                      カートに入れる
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default BeerData;
