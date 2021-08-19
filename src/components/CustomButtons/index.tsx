import Box from "@material-ui/core/Box";
import { TreeNode } from "../../Tree";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCode, updateTree, getData } from "../../store/codeSlice";
import { CustomIcon } from "../CustomIcon";

type Props = {
  node: TreeNode;
  setNode: any;
};

export const CustomButtons: React.FC<Props> = ({ node, setNode }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getData);
  const operators = data["OPERATORS"];

  return (
    <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
      {operators.map((operator) => (
        <Button
          className={classes.btn}
          onClick={() => {
            dispatch(setCode(operator.name));
            if (node) {
              node.value = operator.name;
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
          <CustomIcon value={operator.name} />
        </Button>
      ))}
    </Box>
  );
};
