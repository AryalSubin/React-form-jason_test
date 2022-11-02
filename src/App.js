import "./App.css";
import Form from "./components/Form";

function App() {
  const schema = {
    type: "object",
    properties: {
      employees: {
        type: "array",
        items: [
          {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              email: {
                type: "email",
              },
            },
            required: ["name", "email"],
          },
        ],
      },
    },
    required: ["employees"],
  };
  return (
    <div className="App">
      <Form data={schema} />
    </div>
  );
}

export default App;
