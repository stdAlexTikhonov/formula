import { Box } from "@material-ui/core";
import { Leaf } from "../Leaf";
import { useState } from "react";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace } from "../../store/codeSlice";
import { Func } from "../Func";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { CustomPopover } from "../CustomPopover";

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
        <Leaf
          value={node.left ? node.left.value : ""}
          index={node.left ? node.left.index : 0}
        />
      )}
      <CustomPopover index={node.index} value={node.value} />
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
