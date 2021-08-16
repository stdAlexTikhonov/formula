import Box from "@material-ui/core/Box";
import { TreeNode } from "../../Tree";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useAppDispatch } from "../../hooks";
import { setCode, toggleBrace, updateTree } from "../../store/codeSlice";
import { UserInput } from "../UserInput";
import { CustomIcon } from "../CustomIcon";

type Props = {
  node: TreeNode;
  setNode: any;
};

export const CustomButtons: React.FC<Props> = ({ node, setNode }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {/* <UserInput setNode={setNode} /> */}
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("+"));
          if (node) {
            node.value = "+";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
        size="small"
      >
        <CustomIcon value="+" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("-"));
          if (node) {
            node.value = "-";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="-" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("*"));
          if (node) {
            node.value = "*";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="*" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("/"));
          if (node) {
            node.value = "/";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="/" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("OR"));
          if (node) {
            node.value = "OR";
            node.type = "OPERATOR";
            node.user_input = false;
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
          dispatch(setCode("AND"));
          if (node) {
            node.value = "AND";
            node.type = "OPERATOR";
            node.user_input = false;
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
            node.user_input = false;
            if (!node.left) node.addArguments(1);
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
          dispatch(setCode("<"));
          if (node) {
            node.value = "<";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="<" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("<="));
          if (node) {
            node.value = "<=";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="<=" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("=="));
          if (node) {
            node.value = "==";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="==" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("!="));
          if (node) {
            node.value = "!=";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="!=" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode(">"));
          if (node) {
            node.value = ">";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value=">" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode(">="));
          if (node) {
            node.value = ">=";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value=">=" />
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