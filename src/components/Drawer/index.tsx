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
} from "../../store/codeSlice";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tree from "../../Tree";
import { useStyles } from "./styles";
import { DATA } from "../../data";
import ClearIcon from "@material-ui/icons/Clear";

export const TemporaryDrawer: React.FC<{
  index: number;
  value?: string;
}> = ({ index, value }) => {
  const dispatch = useAppDispatch();

  const index_in_tree = useAppSelector(getCurrentIndex);
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const [show_delete, setShowDelete] = useState(false);

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
        }}
        variant="outlined"
      >
        +
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("-"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "-";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
        }}
        variant="outlined"
      >
        -
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("*"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "*";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
        }}
        variant="outlined"
      >
        *
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("/"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "/";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
        }}
        variant="outlined"
      >
        /
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("OR"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "OR";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
        }}
        variant="outlined"
      >
        OR
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("XOR"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "XOR";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
        }}
        variant="outlined"
      >
        XOR
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("AND"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "AND";
            node.type = "OPERATOR";
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
        }}
        variant="outlined"
      >
        AND
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("NOT"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "NOT";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
        }}
        variant="outlined"
      >
        NOT
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("ROUND"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "ROUND";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
        }}
        variant="outlined"
      >
        ROUND
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("SQRT"));
          const node = Tree.find(index_in_tree);
          if (node) {
            node.value = "SQRT";
            node.type = "FUNCTION";
            if (!node.left) node.setLeft();
          }
        }}
        variant="outlined"
      >
        SQRT
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(toggleBrace());
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
