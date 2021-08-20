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
};

export const Trigger: React.FC<Props> = ({ onClick, node }) => {
  const dispatch = useAppDispatch();
  const [show_delete, setShowDelete] = useState(false);

  const handleDelete = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.delete(node.index);
    node.user_input = false;
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
      // onMouseEnter={() => setShowDelete(true)}
      // onMouseLeave={() => setShowDelete(false)}
    >
      {node.user_input && isNaN(parseInt(node.value)) ? (
        <Box color="red">"{node.value}"</Box>
      ) : (
        <CustomIcon value={node.value} />
      )}
      {show_delete && (
        <IconButton
          size="small"
          onClick={handleDelete}
          style={{ position: "absolute", top: -5, right: -5 }}
        >
          <ClearIcon style={{ fontSize: 15 }} />
        </IconButton>
      )}
      {show_delete && node.left && node.left.type === "OPERATOR" && (
        <IconButton
          size="small"
          onClick={handleSwapLeft}
          style={{ position: "absolute", top: 7, left: -5 }}
        >
          <SyncAltIcon style={{ fontSize: 15 }} />
        </IconButton>
      )}
      {show_delete && node.right && node.right.type === "OPERATOR" && (
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
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box position="relative" width="100%">
        <Typography style={{ position: "absolute" }} variant="caption">
          {node.expected_type}
        </Typography>
      </Box>
      <IconButton onClick={onClick}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
