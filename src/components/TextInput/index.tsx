import { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getUpdateTree, toggleText } from "../../store/codeSlice";
import Tree from "../../Tree";
import { useStyles } from "./styles";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import { IconButton } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

export const TextInput = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const update_tree = useAppSelector(getUpdateTree);

  useEffect(() => {
    setValue(Tree.print(Tree.root, ""));
  }, [update_tree]);

  const handleClick = () => dispatch(toggleText());

  const [value, setValue] = useState("");

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Формула"
        inputProps={{ "aria-label": "formula" }}
        value={value}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="builder"
        onClick={handleClick}
      >
        <DeviceHubIcon />
      </IconButton>
    </Paper>
  );
};
