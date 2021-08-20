import { Func } from "./";
import { Node } from "../Node";
import { TreeNode } from "../../Tree";
import { Switcher } from "../Switcher";

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
      return <Switcher index={node.index ? node.index : 0} />;
  }
};
