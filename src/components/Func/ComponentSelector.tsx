import { Func } from "./";
import { Node } from "../Node";
import { TreeNode } from "../../Tree";
import { Leaf } from "../Leaf";

type Props = {
  node: TreeNode;
};

export const ComponentSelector: React.FC<Props> = ({ node }) => {
  switch (node.type) {
    case "FUNCTION":
      return <Func node={node} />;
    case "OPERATOR":
      return <Node node={node} />;
    default:
      return <Leaf index={node.index} />;
  }
};
