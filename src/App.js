import "./App.css";
import Form from "./components/Form";

function App() {
  const schema = [
    { tag: "div", text: "first div" },
    { tag: "div", text: "second div" },
    { tag: "p", text: "a paragraph" },
    { tag: "h1", text: "heading 1" },
  ];
  return (
    <div className="App">
      <Form data={schema} />
    </div>
  );
}

export default App;
