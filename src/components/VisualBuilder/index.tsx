import Box from "@material-ui/core/Box";
import { Node } from "../Node";
import { Func } from "../Func";
import Tree, { TreeNode } from "../../Tree";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getUpdateTree, toggleText } from "../../store/codeSlice";
import { useStyles } from "./styles";
import { Settings } from "../Settings";
import { Leaf } from "../Leaf";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

export const VisualBuilder = () => {
  const update_tree = useAppSelector(getUpdateTree);
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(toggleText());

  useEffect(() => {
    traversTree(Tree.root);
  }, [update_tree]);

  const traversTree = (node: TreeNode) => {
    if (node.node_type === "OPERAND") return <Leaf index={node.index} />;
    else if (node.node_type === "FUNCTION") return <Func node={node} />;
    else return <Node node={node} />;
  };

  return (
    <Box
      margin="auto"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <Settings />
      <Paper className={classes.box} elevation={3}>
        <Box className={classes.inner_box}>{traversTree(Tree.root)}</Box>
      </Paper>
      <Button style={{ alignSelf: "flex-end" }} onClick={handleClick}>
        Ok
      </Button>
    </Box>
  );
};
