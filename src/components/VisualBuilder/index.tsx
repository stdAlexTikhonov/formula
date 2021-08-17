import Box from "@material-ui/core/Box";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { Func } from "../Func";
import Tree, { TreeNode } from "../../Tree";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getUpdateTree, toggleDrawer } from "../../store/codeSlice";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";

export const VisualBuilder = () => {
  const dispatch = useAppDispatch();
  const update_tree = useAppSelector(getUpdateTree);
  const classes = useStyles();

  const handleClick = () => dispatch(toggleDrawer());

  useEffect(() => {
    traversTree(Tree.root);
  }, [update_tree]);

  const traversTree = (node: TreeNode) => {
    if (node.type === "OPERAND")
      return <Leaf value={node.value} index={node.index} />;
    else if (node.type === "FUNCTION") return <Func node={node} />;
    else return <Node node={node} />;
  };

  return (
    <Box className={classes.box}>
      <IconButton
        style={{ position: "absolute", right: 0 }}
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Box margin="auto">{traversTree(Tree.root)}</Box>
    </Box>
  );
};
