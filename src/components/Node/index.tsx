import { Box } from "@material-ui/core";
import { useState } from "react";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace, getAnimation } from "../../store/codeSlice";
import { useStyles } from "./styles";
import { Leaf } from "../Leaf";
import { ComponentSelector } from "./ComponentSelector";
import Button from "@material-ui/core/Button";
import cn from "classnames";

type Props = {
  node: TreeNode;
};

export const Node: React.FC<Props> = ({ node }) => {
  const animation = useAppSelector(getAnimation);
  const brace = useAppSelector(getBrace);
  const [state, setState] = useState(false);
  const [run_animation, setAnimation] = useState(false);

  const classes = useStyles({ state, brace });

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (animation) {
      setAnimation(true);
      const timeout = setTimeout(() => {
        setState(!state);
        setAnimation(false);
        clearTimeout(timeout);
      }, 1000);
    } else {
      setState(!state);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disableRipple={true}
      className={
        animation && run_animation
          ? cn(classes.block, classes.block_transform)
          : classes.button
      }
    >
      <Box className={classes.box} color={node.type_error ? "red" : "unset"}>
        {node.left && !node.type_error && (
          <Box
            className={
              animation && run_animation
                ? cn(classes.node, classes.node_transform)
                : ""
            }
          >
            <ComponentSelector node={node.left} />
          </Box>
        )}
        <Box
          className={
            animation && run_animation
              ? cn(classes.node, classes.node_transform)
              : ""
          }
        >
          <Leaf index={node.index} />
        </Box>

        {node.right && !node.type_error && (
          <Box
            className={
              animation && run_animation
                ? cn(classes.node, classes.node_transform)
                : ""
            }
          >
            <ComponentSelector node={node.right} />
          </Box>
        )}
      </Box>
    </Button>
  );
};
