import { useState } from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

interface Props {
  promts: string[];
  heading: string;
}

function QuestionCard(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  function GetListElement(index: number, value: string) {
    return (
      <ListGroup.Item
        active={index == currentIndex}
        onClick={() => setCurrentIndex(index)}
        key={value}
      >
        {value}
      </ListGroup.Item>
    );
  }

  return (
    <Card className="mb-3" style={{ width: "30rem" }}>
      <Card.Header>{props.heading}</Card.Header>
      <Card.Body>
        <ListGroup horizontal>
          {props.promts.map((value, index) => GetListElement(index, value))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export { QuestionCard };
