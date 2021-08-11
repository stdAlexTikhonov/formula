export class TreeNode {
  type: "OPERATOR" | "OPERAND" | "FUNCTION";
  index: number;
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;
  static count: number = 0;

  constructor(index: number = 0) {
    this.index = index;
    this.type = "OPERAND";
    this.value = "";
    this.left = null;
    this.right = null;
  }

  setValue(value: string) {
    this.value = value;
  }

  setLeft() {
    TreeNode.count++;
    this.left = new TreeNode(TreeNode.count);
  }

  setRight() {
    TreeNode.count++;
    this.right = new TreeNode(TreeNode.count);
  }
}
class Tree {
  root: TreeNode = new TreeNode();
  update: boolean = false;

  find(index: number) {
    if (this.root.index === index) {
      return this.root;
    } else
      return (
        this._find(this.root.left, index) || this._find(this.root.right, index)
      );
  }

  _find(node: TreeNode | null, index: number): any {
    if (node) {
      if (node.index === index) return node;
      else return this._find(node.left, index) || this._find(node.right, index);
    } else return null;
  }

  delete(index: number) {
    this.update = !this.update;
    if (this.root.index === index) this.root = new TreeNode();
  }
}

export default new Tree();
