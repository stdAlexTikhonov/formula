import Box from "@material-ui/core/Box";
import { TreeNode } from "../../Tree";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useAppDispatch } from "../../hooks";
import { setCode, updateTree } from "../../store/codeSlice";
import { CustomIcon } from "../CustomIcon";

type Props = {
  node: TreeNode;
  setNode: any;
};

export const CustomButtons: React.FC<Props> = ({ node, setNode }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
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
          dispatch(setCode("like"));
          if (node) {
            node.value = "like";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="like" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("ilike"));
          if (node) {
            node.value = "ilike";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="ilike" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(setCode("between"));
          if (node) {
            node.value = "between";
            node.type = "OPERATOR";
            node.user_input = false;
            if (!node.left) node.setLeft();
            if (!node.right) node.setRight();
          }
          dispatch(updateTree());
        }}
        variant="outlined"
      >
        <CustomIcon value="between" />
      </Button>
    </Box>
  );
};
