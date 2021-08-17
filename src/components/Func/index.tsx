import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { TreeNode } from "../../Tree";
import { useState } from "react";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useAppDispatch } from "../../hooks";
import { updateTree } from "../../store/codeSlice";
import { Switcher } from "../Switcher";

type Props = {
  node: TreeNode;
};

export const Func: React.FC<Props> = ({ node }) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const classes = useStyles({ state });
  const handleClick = () => setState(!state);

  const getComponent = (node: TreeNode) => {
    switch (node.type) {
      case "FUNCTION":
        return <Func node={node} />;

      case "OPERATOR":
        return <Node node={node} />;
      default:
        return <Leaf value={node.value} index={node.index} />;
    }
  };

  const handleAddClick = () => {
    node.addArguments(1);
    dispatch(updateTree());
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Switcher index={node.index} value={node.value} />
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
        {node.add_nodes && show && node.args.length < 10 && (
          <IconButton size="small" onClick={handleAddClick}>
            <AddIcon style={{ fontSize: 15 }} />
          </IconButton>
        )}
      </Box>

      {!state && <Typography className={classes.typography}>)</Typography>}
    </Box>
  );
};
