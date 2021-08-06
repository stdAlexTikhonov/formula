import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Leaf } from "../Leaf";
import { Node } from "../Node";
import { TreeNode } from "../../Tree";
import { useAppSelector } from "../../hooks";
import { getBrace } from "../../store/codeSlice";
import { useState } from "react";

type Props = {
  node: TreeNode;
};

export const Func: React.FC<Props> = ({ node }) => {
  const brace = useAppSelector(getBrace);

  const [state, setState] = useState(false);

  const handleClick = () => setState(!state);

  return (
    <Box display="flex" alignItems="center">
      <Typography style={{ margin: 5, fontSize: 25 }}>{node.value}</Typography>
      {!state && <Typography style={{ margin: 5, fontSize: 25 }}>(</Typography>}
      <Box
        display="flex"
        alignItems="center"
        flexDirection={state ? "column" : "row"}
        style={{
          cursor: "pointer",
          borderLeft: state ? "2px solid black" : "none",
          borderRight: state ? "2px solid black" : "none",
          margin: 5,
          padding: 5,
        }}
      >
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
          <Typography
            style={{ padding: 15, fontSize: 25 }}
            onClick={handleClick}
          >
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
      {!state && <Typography style={{ margin: 5, fontSize: 25 }}>)</Typography>}
    </Box>
  );
};
