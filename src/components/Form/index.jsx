import { useContext } from "react";
import SchemaContext from "../../context/SchemaContext";

function FormComponent() {
  const { uiSchema } = useContext(SchemaContext);
  console.log(Object.keys(uiSchema));

  return <form></form>;
}

export default FormComponent;
