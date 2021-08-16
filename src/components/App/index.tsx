import { TextInput } from "../TextInput";
import React from "react";
import Button from "@material-ui/core/Button";
import { VisualBuilder } from "../VisualBuilder";
import { CustomPopover } from "../CustomPopover";

export const App = () => {
  const [view, setView] = React.useState(false);

  const handleClick = () => false;
  return (
    <>
      <CustomPopover index={0} value={"Open"} />
      <Button onClick={handleClick}>{view ? "Text" : "Visual"}</Button>
      {view ? <TextInput /> : <VisualBuilder />}
    </>
  );
};
