import Box from "@material-ui/core/Box";
import { TreeNode } from "../../Tree";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useAppDispatch } from "../../hooks";
import { setCode, toggleBrace, updateTree } from "../../store/codeSlice";

type Props = {
  node: TreeNode;
};

export const CustomButtons: React.FC<Props> = ({ node }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" justifyContent="center">
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("+"));
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
};
