import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QuestionCard } from "./components/Questionary";
import { Row, Col, Container, Button, Navbar } from "react-bootstrap";

function MapQuestions(questionaries: { [key: string]: string[] }) {
  return (
    <>
      {Object.entries(questionaries).map((key_value_pair) => {
        let items = key_value_pair[1];
        let topic = key_value_pair[0];
        return <QuestionCard key={topic} promts={items} heading={topic} />;
      })}
    </>
  );
}

function App() {
  let questionaries: { [key: string]: string[] } = {
    Blub: ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus"],
    Blab: ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus"],
  };

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
            {MapQuestions(questionaries)}
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
