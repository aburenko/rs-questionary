import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QuestionCard } from "./components/QuestionaryCard";
import { Row, Col, Container, Button, Navbar } from "react-bootstrap";
import { useState } from "react";
import questionaries_object from "./assets/question.json";

interface QuestionaryPage {
  [title: string]: string[];
}

interface Questionaries {
  [key: string]: QuestionaryPage;
}

function MapQuestions(questions: QuestionaryPage) {
  return (
    <>
      {Object.entries(questions).map((key_value_pair) => {
        let topic = key_value_pair[0];
        let items = key_value_pair[1];
        return <QuestionCard key={topic} promts={items} heading={topic} />;
      })}
    </>
  );
}

function App() {
  let questionaries: Questionaries = questionaries_object;
  let questionaryTitles = Object.keys(questionaries);

  const [currentQuestionary, setQuestionary] = useState(0);

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

            {MapQuestions(questionaries[questionaryTitles[currentQuestionary]])}

            <div style={{ display: "flex", justifyContent: "right" }}>
              <Button
                variant="primary"
                hidden={currentQuestionary === questionaryTitles.length - 1}
                onClick={() => setQuestionary(currentQuestionary + 1)}
              >
                Next part
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
