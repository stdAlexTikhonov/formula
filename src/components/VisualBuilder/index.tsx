import Box from "@material-ui/core/Box";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { Func } from "../Func";
import Tree, { TreeNode } from "../../Tree";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  getUpdateTree,
  toggleDrawer,
  toggleBrace,
  toggleText,
  getText,
} from "../../store/codeSlice";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import SubjectIcon from "@material-ui/icons/Subject";

export const VisualBuilder = () => {
  const dispatch = useAppDispatch();
  const update_tree = useAppSelector(getUpdateTree);
  const text = useAppSelector(getText);
  const classes = useStyles();

  const handleDrawer = () => dispatch(toggleDrawer());

  const handleBrace = () => dispatch(toggleBrace());

  const handleText = () => dispatch(toggleText());

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
      <Box position="absolute" right="0" display="flex" flexDirection="column">
        <IconButton onClick={handleDrawer}>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={handleBrace}>()</IconButton>
        <IconButton onClick={handleText}>
          <SubjectIcon />
        </IconButton>
      </Box>

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
  );
};
