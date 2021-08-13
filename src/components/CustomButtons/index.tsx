import Box from "@material-ui/core/Box";
import { TreeNode } from "../../Tree";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useAppDispatch } from "../../hooks";
import { setCode, toggleBrace, updateTree } from "../../store/codeSlice";
import { UserInput } from "../UserInput";
import greater from "./greater.svg";
import less from "./less.svg";
import plus from "./plus.svg";
import minus from "./minus.svg";
import eq from "./eq.svg";
import mult from "./mult.svg";
import divide from "./divide.svg";
import gre_or_eq from "./gre_or_eq.svg";
import less_or_eq from "./less_or_eq.svg";
import not_eq from "./not_eq.svg";

type Props = {
  node: TreeNode;
  setNode: any;
};

export const CustomButtons: React.FC<Props> = ({ node, setNode }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" justifyContent="center">
      <UserInput setNode={setNode} />
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
      >
        <img src={plus} width={20} height={20} alt="+" />
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
        <img src={minus} width={20} height={20} alt="-" />
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
        <img src={mult} width={20} height={20} alt="*" />
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
        <img src={divide} width={20} height={20} alt="/" />
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
        <img src={less} width={20} height={20} alt="less" />
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
        <img src={less_or_eq} width={20} height={20} alt="<=>" />
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
        <img src={eq} width={20} height={20} alt="==" />
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
        <img src={not_eq} width={20} height={20} alt="!=" />
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
        <img src={greater} width={20} height={20} alt=">" />
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
        <img src={gre_or_eq} width={20} height={20} alt=">=" />
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
