import { useContext } from "react";
import SchemaContext from "../../context/SchemaContext";

function SchmaEditor() {
  const { uiSchema, setUISchema } = useContext(SchemaContext);

  const handleChange = (event) => {
    setUISchema(JSON.parse(event.target.value));
    console.log(uiSchema);
  };

  return (
    <textarea
      value={uiSchema}
      onChange={handleChange}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default SchmaEditor;
