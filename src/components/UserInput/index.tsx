import { TextField, Button, Box } from "@material-ui/core";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateTree, getCurrentIndex, setCode } from "../../store/codeSlice";
import Tree from "../../Tree";

type Props = {
  setNode: any;
  onClose?: (e: any) => void;
};

export const UserInput: React.FC<Props> = ({ setNode, onClose }) => {
  const dispatch = useAppDispatch();
  const index = useAppSelector(getCurrentIndex);
  const node = Tree.find(index);
  const [value, setValue] = React.useState(node.user_input ? node.value : "");

  const handleClick = (e: any) => {
    dispatch(setCode(value));
    node.node_type = "OPERAND";
    node.left = null;
    node.right = null;
    node.user_input = true;
    node.type = isNaN(parseInt(value)) ? "string" : "number";
    node.value = value;
    node.checkType();
    setNode(node);
    dispatch(updateTree());
    if (onClose) onClose(e);
  };

  const handleChange = (e: any) => {
    node.type = isNaN(parseInt(e.target.value)) ? "string" : "number";
    setValue(e.target.value);
  };

  return (
    <Box display="flex" padding={1} maxWidth={"300px"}>
      <TextField
        autoFocus
        style={{ alignSelf: "center", flexGrow: 1 }}
        placeholder="Пользовательский ввод"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>Ok</Button>
    </Box>
  );
};
