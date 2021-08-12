import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { TreeNode } from "../../Tree";
import { useState } from "react";
import { useStyles } from "./styles";
import { TemporaryDrawer } from "../Drawer";

type Props = {
  node: TreeNode;
};

export const Func: React.FC<Props> = ({ node }) => {
  const [state, setState] = useState<boolean>(false);
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

  return (
    <Box display="flex" alignItems="center">
      <TemporaryDrawer index={node.index} value={node.value} />
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
      </Box>
      {!state && <Typography className={classes.typography}>)</Typography>}
    </Box>
  );
};
