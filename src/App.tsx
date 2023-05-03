import "./App.css";
import { Questionary } from "./components/Questionary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let items = ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus"];

  return (
    <>
      <h1>Quentionary template</h1>
      <Questionary promts={items} heading="Some desc" />
    </>
  );
}

export default App;
