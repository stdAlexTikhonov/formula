import Box from "@material-ui/core/Box";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { Func } from "../Func";
import Tree, { TreeNode } from "../../Tree";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentIndex, getCode } from "../../store/codeSlice";

export const VisualBuilder = () => {
  const dispatch = useAppDispatch();
  const code = useAppSelector(getCode);

  useEffect(() => {
    traversTree(Tree.root);
    // console.log(Tree);
  }, [Tree, code]);

  const traversTree = (node: TreeNode) => {
    if (node.type === "OPERAND")
      return <Leaf value={node.value} index={node.index} />;
    else if (node.type === "FUNCTION") return <Func node={node} />;
    else return <Node node={node} />;
  };

  return (
    <Box
      width="1000px"
      height="700px"
      border="1px solid black"
      margin="auto"
      overflow="auto"
      display="flex"
    >
      <Box margin="auto">{traversTree(Tree.root)}</Box>
    </Box>
  );
};
