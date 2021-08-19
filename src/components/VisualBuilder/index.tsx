import Box from "@material-ui/core/Box";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { Func } from "../Func";
import Tree, { TreeNode } from "../../Tree";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { getUpdateTree, getText } from "../../store/codeSlice";
import { useStyles } from "./styles";
import { Settings } from "./Settings";

export const VisualBuilder = () => {
  const update_tree = useAppSelector(getUpdateTree);
  const text = useAppSelector(getText);
  const classes = useStyles();

  useEffect(() => {
    traversTree(Tree.root);
  }, [update_tree]);

  const traversTree = (node: TreeNode) => {
    if (node.type === "OPERAND") return <Leaf index={node.index} />;
    else if (node.type === "FUNCTION") return <Func node={node} />;
    else return <Node node={node} />;
  };

  return (
    <Box margin="auto" position="relative">
      <Settings />
      <Box className={classes.box}>
        <Box
          margin={text ? "unset" : "auto"}
          width={text ? "100%" : "unset"}
          display={text ? "flex" : "unset"}
          flexWrap={text ? "wrap" : "unset"}
          alignItems="flex-start"
        >
          {traversTree(Tree.root)}
        </Box>
      </Box>
    </Box>
  );
};
