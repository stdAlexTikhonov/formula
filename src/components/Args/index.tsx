import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Node } from "../Node";
import { Func } from "../Func";
import { TreeNode } from "../../Tree";
import { useState } from "react";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useAppDispatch } from "../../hooks";
import { updateTree } from "../../store/codeSlice";
import { Leaf } from "../Leaf";

type Props = {
  node: TreeNode;
};

export const Args: React.FC<Props> = ({ node }) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const classes = useStyles({ state });
  const handleClick = () => setState(!state);

  const getComponent = (node: TreeNode) => {
    switch (node.node_type) {
      case "FUNCTION":
        return <Func node={node} />;

      case "OPERATOR":
        return <Node node={node} />;
      default:
        return <Leaf index={node.index} />;
    }
  };

  const handleAddClick = (e: any) => {
    e.stopPropagation();
    node.addArguments();
    dispatch(updateTree());
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {!state && <Typography className={classes.typography}>(</Typography>}
      <Box className={classes.box}>
        {node.args &&
          node.args.map((arg: TreeNode, i: number) => {
            return i === node.args.length - 1 ? (
              getComponent(arg)
            ) : (
              <>
                {getComponent(arg)}
                <Typography className={classes.mid} onClick={handleClick}>
                  ,
                </Typography>
              </>
            );
          })}
        {node.arbitrary_args && show && node.args.length < 10 && (
          <IconButton size="small" onClick={handleAddClick}>
            <AddIcon style={{ fontSize: 15 }} />
          </IconButton>
        )}
      </Box>

      {!state && <Typography className={classes.typography}>)</Typography>}
    </Box>
  );
};
