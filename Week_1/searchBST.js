let tree = require('../utils/binaryTree.js')

// var searchBST = function (root, val) {
//     let result = null;
//     var helper = function (node) {
//         if (node) {
//             if (node.val === val) {
//                 result = node
//                 return
//             }
//             if (node.left) {
//                 helper(node.left)
//             }
//             if (node.right) {
//                 helper(node.right)
//             }
//         }
//     }
//     helper(root)
//     return result
// };

// without helper function
var searchBST = function (root, val) {
    if (root === null || root.val === val) return root
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
};

console.log(searchBST(tree, 2))