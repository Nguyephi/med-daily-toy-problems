function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let tree = new TreeNode(4)
tree.left = new TreeNode(2)
tree.left.right = new TreeNode(3)
tree.left.left = new TreeNode(1)
tree.right = new TreeNode(7)

module.exports = tree;