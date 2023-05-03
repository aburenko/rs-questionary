import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

interface Props {
  promts: string[];
  heading: string;
}

function Questionary(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(1);

  function GetListElement(index: number, value: string) {
    return (
      <ListGroup.Item
        active={index == currentIndex}
        onClick={() => setCurrentIndex(index)}
      >
        {value}
      </ListGroup.Item>
    );
  }

  return (
    <>
      <p>{props.heading}</p>
      <ListGroup>
        {props.promts.map((value, index) => GetListElement(index, value))}
      </ListGroup>
    </>
  );
}

export { Questionary };
