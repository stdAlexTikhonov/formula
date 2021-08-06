import { TextInput } from "../TextInput";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { VisualBuilder } from "../VisualBuilder";

export const App = () => {
  const [view, setView] = useState(false);

  const handleClick = () => false;
  return (
    <>
      <Button onClick={handleClick}>{view ? "Text" : "Visual"}</Button>
      {view ? <TextInput /> : <VisualBuilder />}
    </>
  );
};
