import "./App.css";
import Form from "./components/Form";

function App() {
  const schema = `{
    "title": "Person",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "number",
        "minimum": 10,
        "maximum": 100
      },
      "married": {
        "type": "checkbox",
        "default": false
      }
    },
    "required": [
      "name",
      "age",
      "married"
    ]
  }`;
  return (
    <div className="App">
      <Form data={JSON.parse(schema)} />
    </div>
  );
}

export default App;
