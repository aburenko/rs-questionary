import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Questionary } from "./components/Questionary";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  let items = ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus"];

  return (
    <>
      <h1>Quentionary template</h1>
      <Container>
        <Row>
          <Col>
            <Questionary promts={items} heading="Blub" />
            <Questionary promts={items} heading="Blab" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
