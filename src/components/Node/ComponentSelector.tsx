import { Func } from "../Func";
import { Node } from "./";
import { TestNode } from "../Args";
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
    case "ARGS":
      return <TestNode node={node} />;
    default:
      return (
        <Leaf
          value={node.value ? node.value : ""}
          index={node.index ? node.index : 0}
        />
      );
  }
};
