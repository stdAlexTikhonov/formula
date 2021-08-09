import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { TreeNode } from "../../Tree";
import { useState } from "react";
import { useStyles } from "./styles";

type Props = {
  node: TreeNode;
};

export const Func: React.FC<Props> = ({ node }) => {
  const [state, setState] = useState<boolean>(false);
  const classes = useStyles({ state });
  const handleClick = () => setState(!state);

  return (
    <Box display="flex" alignItems="center">
      <Typography className={classes.typography}>{node.value}</Typography>
      {!state && <Typography className={classes.typography}>(</Typography>}
      <Box className={classes.box}>
        {node.left && node.left.type !== "OPERAND" ? (
          node.left.type === "FUNCTION" ? (
            <Func node={node.left} />
          ) : (
            <Node node={node.left} />
          )
        ) : (
          <Leaf
            value={node.left ? node.left.value : null}
            index={node.left ? node.left.index : 0}
          />
        )}
        {node.right && (
          <Typography className={classes.mid} onClick={handleClick}>
            ,
          </Typography>
        )}
        {node.right &&
          (node.right.type !== "OPERAND" ? (
            node.right.type === "FUNCTION" ? (
              <Func node={node.right} />
            ) : (
              <Node node={node.right} />
            )
          ) : (
            <Leaf
              value={node.right ? node.right.value : null}
              index={node.right ? node.right.index : 0}
            />
          ))}
      </Box>
      {!state && <Typography className={classes.typography}>)</Typography>}
    </Box>
  );
};
