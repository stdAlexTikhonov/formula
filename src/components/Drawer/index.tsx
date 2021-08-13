import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Wrapper } from "../Wrapper";
import { useAppDispatch } from "../../hooks";
import { setCurrentIndex, updateTree } from "../../store/codeSlice";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tree from "../../Tree";
import { useStyles } from "./styles";
import { DATA } from "../../data";
import ClearIcon from "@material-ui/icons/Clear";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import { CustomButtons } from "../CustomButtons";

export const TemporaryDrawer: React.FC<{
  index: number;
}> = ({ index }) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const [show_delete, setShowDelete] = useState(false);
  const [node] = useState(Tree.find(index));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      dispatch(setCurrentIndex(index));
      setState(open);
    };

  const handleDelete = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.delete(index);
    dispatch(updateTree());
  };

  const handleSwapLeft = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.swap_with_left(index);
    dispatch(updateTree());
  };

  const handleSwapRight = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.swap_with_right(index);
    dispatch(updateTree());
  };

  const list = () => (
    <Box display="flex">
      <Wrapper items={DATA["FUNCTIONS"]} type="functions" />
      <Wrapper items={DATA["FACTS"]} type="facts" />
      <Wrapper items={DATA["MEASURES"]} type="measures" />
      <Wrapper items={DATA["VARIABLES"]} type="variables" />
    </Box>
  );

  return (
    <div>
      {node.value ? (
        <Button
          onClick={toggleDrawer(true)}
          disableRipple={true}
          style={{ position: "relative" }}
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
        >
          {node.value}
          {show_delete && (
            <IconButton
              size="small"
              onClick={handleDelete}
              style={{ position: "absolute", top: -5, right: -5 }}
            >
              <ClearIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
          {show_delete && node.left && node.left.type === "OPERATOR" && (
            <IconButton
              size="small"
              onClick={handleSwapLeft}
              style={{ position: "absolute", top: 7, left: -5 }}
            >
              <SyncAltIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
          {show_delete && node.right && node.right.type === "OPERATOR" && (
            <IconButton
              size="small"
              onClick={handleSwapRight}
              style={{ position: "absolute", top: 7, right: -5 }}
            >
              <SyncAltIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
        </Button>
      ) : (
        <IconButton onClick={toggleDrawer(true)}>
          <AddIcon />
        </IconButton>
      )}

      <Drawer anchor={"bottom"} open={state} onClose={toggleDrawer(false)}>
        <CustomButtons node={node} />
        {list()}
      </Drawer>
    </div>
  );
};
