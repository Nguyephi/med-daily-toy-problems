let tree = require('../utils/binaryTree.js')

var searchBST = function (root, val) {
    let result = null;
    var helper = function (node) {
        if (node) {
            if (node.val === val) {
                result = node
                return
            }
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
        }
    }
    helper(root)
    return result
};

console.log('hi', searchBST(tree, 2))