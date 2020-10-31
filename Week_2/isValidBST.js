let tree = require('../utils/binaryTree').tree
let tree2 = require('../utils/binaryTree').tree2

var isValidBST = function (root) {
    function helper(node, lower, upper) {
        if (node === null) {
            return true
        }
        let val = node.val
        if (lower !== null && val <= lower) return false
        if (upper !== null && val >= upper) return false
        if (!helper(node.left, lower, val)) {
            return false
        }
        if (!helper(node.right, val, upper)) {
            return false
        }
        return true
    }
    return helper(root, null, null)
};


console.log(isValidBST(tree))
console.log(isValidBST(tree2))