import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Wrapper } from "../Wrapper";
import { useAppDispatch } from "../../hooks";
import { setCurrentIndex, updateTree } from "../../store/codeSlice";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tree from "../../Tree";
import { DATA } from "../../data";
import ClearIcon from "@material-ui/icons/Clear";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import { CustomButtons } from "../CustomButtons";
import { CustomIcon } from "../CustomIcon";

export const TemporaryDrawer: React.FC<{
  index: number;
  value?: string;
}> = ({ index, value }) => {
  const dispatch = useAppDispatch();
  const [state, setState] = React.useState(false);
  const [show_delete, setShowDelete] = React.useState(false);
  const [node, setNode] = React.useState(Tree.find(index));

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
    node.user_input = false;
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
      {value ? (
        <Button
          onClick={toggleDrawer(true)}
          disableRipple={true}
          style={{ position: "relative" }}
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
        >
          {node.user_input ? (
            <Box color="red">"{value}"</Box>
          ) : (
            <CustomIcon value={value} />
          )}
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
        <CustomButtons node={node} setNode={setNode} />
        {list()}
      </Drawer>
    </div>
  );
};
