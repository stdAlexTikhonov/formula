import { Box } from "@material-ui/core";
import { useState } from "react";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace } from "../../store/codeSlice";
import { useStyles } from "./styles";
import { Leaf } from "../Leaf";
import { ComponentSelector } from "./ComponentSelector";
import Button from "@material-ui/core/Button";
import cn from "classnames";

type Props = {
  node: TreeNode;
};

export const Node: React.FC<Props> = ({ node }) => {
  const brace = useAppSelector(getBrace);
  const [state, setState] = useState(false);
  const [animation, setAnimation] = useState(false);

  const classes = useStyles({ state, brace });

  const handleClick = (e: any) => {
    e.stopPropagation();
    setAnimation(true);
    const timeout = setTimeout(() => {
      setState(!state);
      setAnimation(false);
      clearTimeout(timeout);
    }, 1000);
  };

  return (
    <Button
      onClick={handleClick}
      disableRipple={true}
      className={
        animation ? cn(classes.block, classes.block_transform) : classes.button
      }
    >
      <Box className={classes.box} color={node.type_error ? "red" : "unset"}>
        {node.left && !node.type_error && (
          <Box
            className={
              animation ? cn(classes.node, classes.node_transform) : ""
            }
          >
            <ComponentSelector node={node.left} />
          </Box>
        )}
        <Box
          className={animation ? cn(classes.node, classes.node_transform) : ""}
        >
          <Leaf index={node.index} />
        </Box>

        {node.right && !node.type_error && (
          <Box
            className={
              animation ? cn(classes.node, classes.node_transform) : ""
            }
          >
            <ComponentSelector node={node.right} />
          </Box>
        )}
      </Box>
    </Button>
  );
};
