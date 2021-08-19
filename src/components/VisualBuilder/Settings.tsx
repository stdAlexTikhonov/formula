import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useAppDispatch } from "../../hooks";
import { toggleDrawer, toggleBrace, toggleText } from "../../store/codeSlice";
import SubjectIcon from "@material-ui/icons/Subject";

export const Settings = () => {
  const dispatch = useAppDispatch();

  const handleDrawer = () => dispatch(toggleDrawer());

  const handleBrace = () => dispatch(toggleBrace());

  const handleText = () => dispatch(toggleText());

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
    </Box>
  );
};
