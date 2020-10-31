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

// not a valid BST
let tree2 = new TreeNode(5)
tree2.left = new TreeNode(1)
tree2.right = new TreeNode(4)
tree2.right.left = new TreeNode(3)
tree2.right.right = new TreeNode(6)

module.exports = {
    tree,
    tree2,
    TreeNode
}