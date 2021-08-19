import { Box } from "@material-ui/core";
import { useState } from "react";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace } from "../../store/codeSlice";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Switcher } from "../Switcher";
import { ComponentSelector } from "./ComponentSelector";

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
      {node.left && <ComponentSelector node={node.left} />}
      <Switcher index={node.index} />
      {node.right && <ComponentSelector node={node.right} />}
    </Box>
  );
};
