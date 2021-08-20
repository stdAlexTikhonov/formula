import { TextField, Button, Box } from "@material-ui/core";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateTree, getCurrentIndex, setCode } from "../../store/codeSlice";
import Tree from "../../Tree";

type Props = {
  setNode: any;
};

export const UserInput: React.FC<Props> = ({ setNode }) => {
  const dispatch = useAppDispatch();
  const index = useAppSelector(getCurrentIndex);
  const node = Tree.find(index);
  const [value, setValue] = React.useState(node.user_input ? node.value : "");

  const handleClick = () => {
    dispatch(setCode(value));
    node.node_type = "OPERAND";
    node.left = null;
    node.right = null;
    node.user_input = true;
    node.value = value;
    dispatch(updateTree());
    setNode(node);
  };

  return (
    <Box display="flex" padding={1} maxWidth={"300px"}>
      <TextField
        autoFocus
        style={{ alignSelf: "center", flexGrow: 1 }}
        placeholder="Пользовательский ввод"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleClick}>Ok</Button>
    </Box>
  );
};
