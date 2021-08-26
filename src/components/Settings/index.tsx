import React from "react";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ClearIcon from "@material-ui/icons/Clear";
import Box from "@material-ui/core/Box";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getBrace,
  toggleBrace,
  updateTree,
  getAnimation,
  toggleAnimation,
} from "../../store/codeSlice";
import Tree, { TreeNode } from "../../Tree";
import { useStyles } from "./styles";

export const Settings = () => {
  const brace = useAppSelector(getBrace);
  const animation = useAppSelector(getAnimation);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    Tree.root = new TreeNode();
    dispatch(updateTree());
  };

  const handleAnimation = () => dispatch(toggleAnimation());

  const handleBrace = () => dispatch(toggleBrace());

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      position="absolute"
      right="-50px"
      display="flex"
      flexDirection="column"
    >
      <IconButton onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav" aria-label="settings">
          <ListItem button onClick={handleBrace}>
            <Checkbox
              checked={brace}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              className={classes.checkbox}
            />
            <ListItemText primary="Braces" />
          </ListItem>
          <ListItem button onClick={handleAnimation}>
            <Checkbox
              checked={animation}
              color="primary"
              inputProps={{
                "aria-label": "secondary checkbox",
              }}
              className={classes.checkbox}
            />
            <ListItemText primary="Animation" />
          </ListItem>
          <ListItem button onClick={handleReset}>
            <Box className={classes.checkbox}>
              <ClearIcon />
            </Box>
            <ListItemText primary="Reset" />
          </ListItem>
        </List>
      </Popover>
    </Box>
  );
};
