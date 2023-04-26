import { useState } from "react";
import SchmaEditor from "./components/Schema/index";
import FormComponent from "./components/Form";
import SchemaContext from "./context/SchemaContext";
import "./App.css";

function App() {
  const [uiSchema, setUISchema] = useState(null);

  console.log(uiSchema);

  return (
    <SchemaContext.Provider value={{ uiSchema, setUISchema }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", height: "100vh" }}>
          <SchmaEditor />
        </div>
        <div style={{ width: "50%", height: "100vh" }}>
          <FormComponent />
        </div>
      </div>
    </SchemaContext.Provider>
  );
}

export default App;
