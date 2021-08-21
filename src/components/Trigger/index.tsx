import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import Tree, { TreeNode } from "../../Tree";
import { useAppDispatch } from "../../hooks";
import { updateTree } from "../../store/codeSlice";
import { useState } from "react";
import { CustomIcon } from "../CustomIcon";
import { Typography } from "@material-ui/core";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  node: TreeNode;
  setNode: any;
};

type UserInputProps = {
  value: string;
  type: string;
};

const UserInput: React.FC<UserInputProps> = ({ value, type }) => {
  if (type === "string") {
    if (value[0] === '"') return <Box color="brown">{value}</Box>;
    else return <Box color="brown">"{value}"</Box>;
  } else {
    return <CustomIcon value={parseFloat(value).toString()} />;
  }
};

export const Trigger: React.FC<Props> = ({ onClick, node, setNode }) => {
  const dispatch = useAppDispatch();
  const [show_delete, setShowDelete] = useState(false);

  const handleDelete = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.delete(node.index);
    const new_node = Tree.find(node.index);
    setNode(new_node);
    dispatch(updateTree());
  };

  const handleSwapLeft = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.swap_with_left(node.index);
    dispatch(updateTree());
  };

  const handleSwapRight = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.swap_with_right(node.index);
    dispatch(updateTree());
  };

  return node.value ? (
    <Button
      onClick={onClick}
      disableRipple={true}
      style={{ position: "relative" }}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <Box display="flex" flexDirection="column">
        {node.type_error && (
          <Typography variant="caption" style={{ color: "red", fontSize: 10 }}>
            expected: {node.expected_type}
          </Typography>
        )}
        <Box color={node.type_error ? "red" : "unset"}>
          {node.user_input ? (
            <UserInput value={node.value} type={node.type} />
          ) : (
            <CustomIcon value={node.value} />
          )}
        </Box>
      </Box>
      {show_delete && (
        <IconButton
          size="small"
          onClick={handleDelete}
          style={{ position: "absolute", top: -5, right: -5 }}
        >
          <ClearIcon style={{ fontSize: 15 }} />
        </IconButton>
      )}
      {show_delete && node.left && node.left.node_type === "OPERATOR" && (
        <IconButton
          size="small"
          onClick={handleSwapLeft}
          style={{ position: "absolute", top: 7, left: -5 }}
        >
          <SyncAltIcon style={{ fontSize: 15 }} />
        </IconButton>
      )}
      {show_delete && node.right && node.right.node_type === "OPERATOR" && (
        <IconButton
          size="small"
          onClick={handleSwapRight}
          style={{ position: "absolute", top: 7, right: -5 }}
        >
          <SyncAltIcon style={{ fontSize: 15 }} />
        </IconButton>
      )}
    </Button>
  ) : (
    <IconButton onClick={onClick}>
      <AddIcon />
    </IconButton>
  );
};
