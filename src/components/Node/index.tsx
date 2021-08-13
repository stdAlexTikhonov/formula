import { Box } from "@material-ui/core";
import { Leaf } from "../Leaf";
import { useState } from "react";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace } from "../../store/codeSlice";
import { Func } from "../Func";
import { useStyles } from "./styles";
import { TemporaryDrawer } from "../Drawer";
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from "@material-ui/icons/Autorenew";

type Props = {
  node: TreeNode;
};

export const Node: React.FC<Props> = ({ node }) => {
  const brace = useAppSelector(getBrace);
  const [state, setState] = useState(false);
  const [visible, setVisible] = useState(false);
  const classes = useStyles({ state, brace });

  const handleClick = () => setState(!state);

  return (
    <Box
      className={classes.box}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {visible && (
        <IconButton
          onClick={handleClick}
          className={classes.btn}
          size={"small"}
        >
          <AutorenewIcon className={classes.icon} />
        </IconButton>
      )}
      {node.left && node.left.type !== "OPERAND" ? (
        node.left.type === "FUNCTION" ? (
          <Func node={node.left} />
        ) : (
          <Node node={node.left} />
        )
      ) : (
        <Leaf index={node.left ? node.left.index : 0} />
      )}
      <TemporaryDrawer index={node.index} />
      {node.right && node.right.type !== "OPERAND" ? (
        node.right.type === "FUNCTION" ? (
          <Func node={node.right} />
        ) : (
          <Node node={node.right} />
        )
      ) : (
        <Leaf index={node.right ? node.right.index : 0} />
      )}
    </Box>
  );
};
