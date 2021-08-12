export class TreeNode {
  type: "OPERATOR" | "OPERAND" | "FUNCTION";
  index: number;
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;
  args: TreeNode[];
  static count: number = 0;

  constructor(index: number = 0) {
    this.index = index;
    this.type = "OPERAND";
    this.value = "";
    this.left = null;
    this.right = null;
    this.args = [];
  }

  setValue(value: string) {
    this.value = value;
  }

  addArguments(quantity: number) {
    while (quantity > 0) {
      TreeNode.count++;
      this.args.push(new TreeNode(TreeNode.count));
      quantity--;
    }
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

  find(index: number) {
    if (this.root.index === index) {
      return this.root;
    } else if (this.root.type === "OPERAND" || this.root.type === "OPERATOR")
      return (
        this._find(this.root.left, index) || this._find(this.root.right, index)
      );
    else if (this.root.type === "FUNCTION")
      return (
        this._find(this.root.args[0], index) ||
        this._find(this.root.args[1], index) ||
        this._find(this.root.args[2], index)
      );
    else return null;
  }

  _find(node: TreeNode | null, index: number): any {
    if (node) {
      if (node.index === index) return node;
      else if (node.type === "OPERAND" || node.type === "OPERATOR")
        return this._find(node.left, index) || this._find(node.right, index);
      else if (node.type === "FUNCTION")
        return (
          this._find(node.args[0], index) ||
          this._find(node.args[1], index) ||
          this._find(node.args[2], index)
        );
      else return null;
    }
  }

  delete(index: number) {
    if (this.root.index === index) this.root = new TreeNode();
    else if (this.root.left && this.root.left.index === index)
      this.root.left = new TreeNode(this.root.left.index);
    else if (this.root.right && this.root.right.index === index)
      this.root.right = new TreeNode(this.root.right.index);
    else if (this.root.type === "FUNCTION") {
      for (let i = 0; i < this.root.args.length; i++) {
        if (this.root.args[i].index === index)
          this.root.args[i] = new TreeNode(this.root.args[i].index);
      }
      return (
        this._delete(this.root.args[0], index) ||
        this._delete(this.root.args[1], index) ||
        this._delete(this.root.args[2], index)
      );
    } else
      return (
        this._delete(this.root.left, index) ||
        this._delete(this.root.right, index)
      );
  }

  _delete(node: TreeNode | null, index: number): any {
    if (node) {
      if (node.index === index) node = new TreeNode(node.index);
      else if (node.left && node.left.index === index)
        node.left = new TreeNode(node.left.index);
      else if (node.right && node.right.index === index)
        node.right = new TreeNode(node.right.index);
      else if (node.type === "FUNCTION") {
        for (let i = 0; i < node.args.length; i++) {
          if (node.args[i].index === index)
            node.args[i] = new TreeNode(node.args[i].index);
        }
        return (
          this._delete(node.args[0], index) ||
          this._delete(node.args[1], index) ||
          this._delete(node.args[2], index)
        );
      } else
        return (
          this._delete(node.left, index) || this._delete(node.right, index)
        );
    }
  }

  swap_with_left(index: number) {
    const node = this.find(index);
    const child = node.left;
    if (node) {
      if (node.type !== "OPERATOR" || child.type !== "OPERATOR") return false;
      else {
        [node.value, child.value] = [child.value, node.value];
      }
    }
    return false;
  }

  swap_with_right(index: number) {
    const node = this.find(index);
    const child = node.right;
    if (node) {
      if (node.type !== "OPERATOR" || child.type !== "OPERATOR") return false;
      else {
        [node.value, child.value] = [child.value, node.value];
      }
    }
    return false;
  }
}

export default new Tree();
