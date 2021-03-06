export class TreeNode {
  node_type: string;
  index: number;
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;
  args: TreeNode[];
  arbitrary_args: boolean;
  user_input: boolean;
  expected_type: string;
  type: string;
  type_error: boolean;
  static count: number = 0;

  constructor(index: number = 0, node_type: string = "OPERAND") {
    this.index = index;
    this.node_type = node_type;
    this.value = "";
    this.left = null;
    this.right = null;
    this.args = [];
    this.user_input = false;
    this.arbitrary_args = false;
    this.expected_type = "any";
    this.type = "any";
    this.type_error = false;
  }

  setValue(value: string) {
    this.value = value;
  }

  addArguments(arguments_types?: string[]) {
    let i = 0;
    const quantity = arguments_types ? arguments_types.length : 1;
    while (i < quantity) {
      TreeNode.count++;
      const node = new TreeNode(TreeNode.count);
      node.expected_type = arguments_types
        ? arguments_types[i]
        : this.args[0].type;
      this.args.push(node);
      i++;
    }
  }

  setLeft(expected_type: string) {
    TreeNode.count++;
    this.left = new TreeNode(TreeNode.count);
    this.left.expected_type = expected_type;
  }

  setRight(expected_type: string) {
    TreeNode.count++;
    this.right = new TreeNode(TreeNode.count);
    this.right.expected_type = expected_type;
  }

  setArgs(arbitrary_args: boolean, arguments_types: string[]) {
    TreeNode.count++;
    this.right = new TreeNode(TreeNode.count, "ARGS");
    this.right.arbitrary_args = arbitrary_args;
    if (arguments_types) this.right.addArguments(arguments_types);
  }

  checkType() {
    this.type_error =
      this.expected_type !== "any" && this.expected_type !== this.type;
  }
}
class Tree {
  root: TreeNode = new TreeNode();

  find(index: number) {
    if (this.root.index === index) {
      return this.root;
    } else if (
      this.root.node_type === "OPERAND" ||
      this.root.node_type === "OPERATOR"
    )
      return (
        this._find(this.root.left, index) || this._find(this.root.right, index)
      );
    else if (this.root.node_type === "FUNCTION")
      return (
        this._find(this.root.args[0], index) ||
        this._find(this.root.args[1], index) ||
        this._find(this.root.args[2], index) ||
        this._find(this.root.args[3], index) ||
        this._find(this.root.args[4], index) ||
        this._find(this.root.args[5], index) ||
        this._find(this.root.args[6], index) ||
        this._find(this.root.args[7], index) ||
        this._find(this.root.args[8], index) ||
        this._find(this.root.args[9], index)
      );
    else return null;
  }

  _find(node: TreeNode | null, index: number): any {
    if (node) {
      if (node.index === index) return node;
      else if (node.node_type === "OPERAND" || node.node_type === "OPERATOR")
        return this._find(node.left, index) || this._find(node.right, index);
      else if (node.node_type === "FUNCTION" || node.node_type === "ARGS")
        return (
          this._find(node.args[0], index) ||
          this._find(node.args[1], index) ||
          this._find(node.args[2], index) ||
          this._find(node.args[3], index) ||
          this._find(node.args[4], index) ||
          this._find(node.args[5], index) ||
          this._find(node.args[6], index) ||
          this._find(node.args[7], index) ||
          this._find(node.args[8], index) ||
          this._find(node.args[9], index)
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
    else if (this.root.node_type === "FUNCTION") {
      for (let i = 0; i < this.root.args.length; i++) {
        if (this.root.args[i].index === index)
          this.root.args[i] = new TreeNode(this.root.args[i].index);
      }
      return (
        this._delete(this.root.args[0], index) ||
        this._delete(this.root.args[1], index) ||
        this._delete(this.root.args[2], index) ||
        this._delete(this.root.args[3], index) ||
        this._delete(this.root.args[4], index) ||
        this._delete(this.root.args[5], index) ||
        this._delete(this.root.args[6], index) ||
        this._delete(this.root.args[7], index) ||
        this._delete(this.root.args[8], index) ||
        this._delete(this.root.args[9], index)
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
      else if (node.node_type === "FUNCTION" || node.node_type === "ARGS") {
        for (let i = 0; i < node.args.length; i++) {
          if (node.args[i].index === index)
            node.args[i] = new TreeNode(node.args[i].index);
        }
        return (
          this._delete(node.args[0], index) ||
          this._delete(node.args[1], index) ||
          this._delete(node.args[2], index) ||
          this._delete(node.args[3], index) ||
          this._delete(node.args[4], index) ||
          this._delete(node.args[5], index) ||
          this._delete(node.args[6], index) ||
          this._delete(node.args[7], index) ||
          this._delete(node.args[8], index) ||
          this._delete(node.args[9], index)
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
      if (
        node.node_type !== "OPERATOR" ||
        child.node_type !== "OPERATOR" ||
        child.value === "in"
      )
        return false;
      else {
        [node.value, child.value] = [child.value, node.value];
        [node.type, child.type] = [child.type, node.type];
        [node.expected_type, child.expected_type] = [
          child.expected_type,
          node.expected_type,
        ];
      }
    }
    return false;
  }

  swap_with_right(index: number) {
    const node = this.find(index);
    const child = node.right;
    if (node) {
      if (
        node.node_type !== "OPERATOR" ||
        child.node_type !== "OPERATOR" ||
        child.value === "in"
      )
        return false;
      else {
        [node.value, child.value] = [child.value, node.value];
        [node.type, child.type] = [child.type, node.type];
        [node.expected_type, child.expected_type] = [
          child.expected_type,
          node.expected_type,
        ];
      }
    }
    return false;
  }

  print(start: TreeNode, traversal: string = "") {
    if (start) {
      if (start.node_type === "OPERATOR") {
        traversal += "(";

        traversal = this.print(start.left!, traversal);

        traversal += " ";

        traversal += start.value.toUpperCase();

        traversal += " ";

        traversal = this.print(start.right!, traversal);

        traversal += ")";
      }

      if (start.node_type === "FUNCTION" || start.node_type === "ARGS") {
        traversal += start.value.toUpperCase() + "(";

        if (start.args[0])
          traversal = this.print(start.args[0], traversal) + ", ";
        if (start.args[1])
          traversal = this.print(start.args[1], traversal) + ", ";
        if (start.args[2])
          traversal = this.print(start.args[2], traversal) + ", ";
        if (start.args[3])
          traversal = this.print(start.args[3], traversal) + ", ";
        if (start.args[4])
          traversal = this.print(start.args[4], traversal) + ", ";
        if (start.args[5])
          traversal = this.print(start.args[5], traversal) + ", ";
        if (start.args[6])
          traversal = this.print(start.args[6], traversal) + ", ";
        if (start.args[7])
          traversal = this.print(start.args[7], traversal) + ", ";
        if (start.args[8])
          traversal = this.print(start.args[8], traversal) + ", ";
        if (start.args[9]) traversal = this.print(start.args[9], traversal);

        traversal += ")";
      }

      if (start.node_type === "OPERAND") {
        if (start.type === "string" && start.user_input) traversal += ' "';
        else traversal += " ";

        traversal += start.value;

        if (start.type === "string" && start.user_input) traversal += '" ';
        else traversal += " ";
      }
    }
    return traversal;
  }
}

export default new Tree();
