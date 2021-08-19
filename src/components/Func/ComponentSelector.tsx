import { Func } from "./";
import { Node } from "../Node";
import { Leaf } from "../Leaf";
import { TreeNode } from "../../Tree";

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
      return <Leaf index={node.index ? node.index : 0} />;
  }
};
