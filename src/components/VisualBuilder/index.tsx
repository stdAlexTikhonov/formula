import Box from "@material-ui/core/Box";
import { Node } from "../Node";
import { Func } from "../Func";
import Tree, { TreeNode } from "../../Tree";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { getUpdateTree } from "../../store/codeSlice";
import { useStyles } from "./styles";
import { Settings } from "./Settings";
import { Leaf } from "../Leaf";

export const VisualBuilder = () => {
  const update_tree = useAppSelector(getUpdateTree);
  const classes = useStyles();

  useEffect(() => {
    traversTree(Tree.root);
  }, [update_tree]);

  const traversTree = (node: TreeNode) => {
    if (node.node_type === "OPERAND") return <Leaf index={node.index} />;
    else if (node.node_type === "FUNCTION") return <Func node={node} />;
    else return <Node node={node} />;
  };

  return (
    <Box margin="auto" position="relative">
      <Settings />
      <Box className={classes.box}>
        <Box className={classes.inner_box}>{traversTree(Tree.root)}</Box>
      </Box>
    </Box>
  );
};
