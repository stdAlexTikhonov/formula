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

export const TemporaryDrawer: React.FC<{
  data: any;
  index: number;
  value?: string;
}> = ({ data, index, value }) => {
  const dispatch = useAppDispatch();

  const index_in_tree = useAppSelector(getCurrentIndex);
  const classes = useStyles();
  const [state, setState] = React.useState(false);

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

  const list = () => (
    <Box display="flex">
      <Wrapper items={data["FUNCTIONS"]} type="functions" />
      <Wrapper items={data["FACTS"]} type="facts" />
      <Wrapper items={data["MEASURES"]} type="measures" />
      <Wrapper items={data["VARIABLES"]} type="variables" />
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
            node.setLeft();
            node.setRight();
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
            node.setLeft();
            node.setRight();
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
            node.setLeft();
            node.setRight();
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
            node.setLeft();
            node.setRight();
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
            node.setLeft();
            node.setRight();
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
            node.setLeft();
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
            node.setLeft();
            node.setRight();
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
            node.setLeft();
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
            node.setLeft();
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
            node.setLeft();
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
        <Button onClick={toggleDrawer(true)}>{value}</Button>
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
