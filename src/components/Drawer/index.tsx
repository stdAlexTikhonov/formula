import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Wrapper } from "../Wrapper";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setCode,
  setCurrentIndex,
  getCurrentIndex,
  toggleBrace,
  updateTree,
} from "../../store/codeSlice";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tree from "../../Tree";
import { useStyles } from "./styles";
import { DATA } from "../../data";
import ClearIcon from "@material-ui/icons/Clear";
import SyncAltIcon from "@material-ui/icons/SyncAlt";

export const TemporaryDrawer: React.FC<{
  index: number;
  value?: string;
}> = ({ index, value }) => {
  const dispatch = useAppDispatch();

  const index_in_tree = useAppSelector(getCurrentIndex);
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

  const custom_btns = () => (
    <Box display="flex" justifyContent="center">
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("+"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "+";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        +
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("-"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "-";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        -
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("*"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "*";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        *
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("/"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "/";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        /
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("OR"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "OR";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        OR
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("XOR"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "XOR";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        XOR
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("AND"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "AND";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        AND
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("NOT"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "NOT";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        NOT
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("ROUND"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "ROUND";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        ROUND
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("SQRT"));
          // const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "SQRT";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        SQRT
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(toggleBrace());
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        ()
      </Button>
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
          {value}
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
        {custom_btns()}
        {list()}
      </Drawer>
    </div>
  );
};
