import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useAppDispatch } from "../../hooks";
import {
  toggleDrawer,
  toggleBrace,
  toggleText,
  updateTree,
} from "../../store/codeSlice";
import SubjectIcon from "@material-ui/icons/Subject";
import Tree, { TreeNode } from "../../Tree";
import ClearIcon from "@material-ui/icons/Clear";

export const Settings = () => {
  const dispatch = useAppDispatch();

  const handleDrawer = () => dispatch(toggleDrawer());

  const handleBrace = () => dispatch(toggleBrace());

  const handleText = () => dispatch(toggleText());

  const handleReset = () => {
    Tree.root = new TreeNode();
    dispatch(updateTree());
  };

  return (
    <Box
      position="absolute"
      right="-50px"
      display="flex"
      flexDirection="column"
    >
      <IconButton onClick={handleDrawer}>
        <SettingsIcon />
      </IconButton>
      <IconButton onClick={handleBrace}>()</IconButton>
      <IconButton onClick={handleText}>
        <SubjectIcon />
      </IconButton>
      <IconButton onClick={handleReset}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};
