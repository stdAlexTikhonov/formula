import { Box } from "@material-ui/core";
import { Leaf } from "../Leaf";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace } from "../../store/codeSlice";
import { Func } from "../Func";
import { useStyles } from "./styles";

type Props = {
  node: TreeNode;
};

export const Node: React.FC<Props> = ({ node }) => {
  const brace = useAppSelector(getBrace);
  const [state, setState] = useState(false);
  const classes = useStyles({ state, brace });

  const handleClick = () => setState(!state);

  return (
    <Box className={classes.box}>
      {node.left && node.left.type !== "OPERAND" ? (
        node.left.type === "FUNCTION" ? (
          <Func node={node.left} />
        ) : (
          <Node node={node.left} />
        )
      ) : (
        <Leaf
          value={node.left ? node.left.value : ""}
          index={node.left ? node.left.index : 0}
        />
      )}
      <Typography
        variant="button"
        onClick={handleClick}
        className={classes.mid}
      >
        {node.value}
      </Typography>
      {node.right && node.right.type !== "OPERAND" ? (
        node.right.type === "FUNCTION" ? (
          <Func node={node.right} />
        ) : (
          <Node node={node.right} />
        )
      ) : (
        <Leaf
          value={node.right ? node.right.value : ""}
          index={node.right ? node.right.index : 0}
        />
      )}
    </Box>
  );
};
