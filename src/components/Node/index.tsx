import { Box } from "@material-ui/core";
import { useState } from "react";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace } from "../../store/codeSlice";
import { useStyles } from "./styles";
import { Leaf } from "../Leaf";
import { ComponentSelector } from "./ComponentSelector";
import Button from "@material-ui/core/Button";

type Props = {
  node: TreeNode;
};

export const Node: React.FC<Props> = ({ node }) => {
  const brace = useAppSelector(getBrace);
  const [state, setState] = useState(false);

  const classes = useStyles({ state, brace });

  const handleClick = (e: any) => {
    e.stopPropagation();
    setState(!state);
  };

  return (
    <Button onClick={handleClick} disableRipple={true}>
      <Box className={classes.box} color={node.type_error ? "red" : "unset"}>
        {node.left && !node.type_error && (
          <ComponentSelector node={node.left} />
        )}
        <Leaf index={node.index} />
        {node.right && !node.type_error && (
          <ComponentSelector node={node.right} />
        )}
      </Box>
    </Button>
  );
};
