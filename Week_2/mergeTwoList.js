let ListNode = require('../utils/linkList').ListNode
let linkList1 = require('../utils/linkList').linkedList1
let linkList2 = require('../utils/linkList').linkedList2

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

console.log(mergeTwoLists(linkList1, linkList2))