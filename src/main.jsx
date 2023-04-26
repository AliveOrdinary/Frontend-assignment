import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SchemaContext from "./context/SchemaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SchemaContext.Provider>
      <App />
    </SchemaContext.Provider>
  </React.StrictMode>
);
