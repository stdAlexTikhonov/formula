import Box from "@material-ui/core/Box";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { Func } from "../Func";
import Tree, { TreeNode } from "../../Tree";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { getCode } from "../../store/codeSlice";
import { useStyles } from "./styles";

export const VisualBuilder = () => {
  const code = useAppSelector(getCode);
  const classes = useStyles();

  useEffect(() => {
    traversTree(Tree.root);
  }, [Tree, code]);

  const traversTree = (node: TreeNode) => {
    if (node.type === "OPERAND")
      return <Leaf value={node.value} index={node.index} />;
    else if (node.type === "FUNCTION") return <Func node={node} />;
    else return <Node node={node} />;
  };

  return (
    <Box className={classes.box}>
      <Box margin="auto">{traversTree(Tree.root)}</Box>
    </Box>
  );
};
