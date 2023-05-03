import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Questionary } from "./components/Questionary";
import { Row, Col, Container, Button, Navbar } from "react-bootstrap";

function App() {
  let items = ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus"];

  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#A4A4A4",
        }}
      >
        <Row>
          <Col>
            <Navbar className="mb-4" expand="lg" variant="light" bg="light">
              <Navbar.Brand href="#">
                Erasmus stay feedback questionary
              </Navbar.Brand>
            </Navbar>
            <Questionary promts={items} heading="Blub" />
            <Questionary promts={items} heading="Blab" />
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Button variant="primary">Next part</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
