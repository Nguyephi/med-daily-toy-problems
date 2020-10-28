let tree = require('../utils/binaryTree')

var maxDepth = function (root) {
    if (root === null) return 0
    let maxLength = 0
    function helper(node, depth) {
        maxLength = Math.max(maxLength, depth)
        if (node === null) {
            return
        }
        if (node.left !== null) {
            helper(node.left, depth + 1)
        }
        if (node.right !== null) {
            helper(node.right, depth + 1)
        }
    }
    helper(root, 1)
    return maxLength
};

console.log(maxDepth(tree))