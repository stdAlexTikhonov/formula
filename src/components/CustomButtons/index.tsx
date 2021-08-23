import Box from "@material-ui/core/Box";
import { TreeNode } from "../../Tree";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCode, updateTree, getData } from "../../store/codeSlice";
import { CustomIcon } from "../CustomIcon";

type Props = {
  node: TreeNode;
};

export const CustomButtons: React.FC<Props> = ({ node }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getData);
  const operators = data["OPERATORS"];

  return (
    <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
      {operators.map((operator) => (
        <Button
          className={classes.btn}
          onClick={(e: any) => {
            e.stopPropagation();
            dispatch(setCode(operator.name));
            if (node) {
              node.value = operator.name;
              node.node_type = "OPERATOR";
              if (node.right && node.right.node_type === "ARGS")
                node.right = new TreeNode(node.right.index);
              node.user_input = false;
              node.type = operator.return_type!;
              node.setLeft(operator.arguments_types![0]);
              node.setRight(operator.arguments_types![1]);
            }
            node.checkType();
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
