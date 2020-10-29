function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let linkedList = new ListNode(1)
linkedList.next = new ListNode(2)
linkedList.next.next = new ListNode(3)
linkedList.next.next.next = new ListNode(4)

let linkedList1 = new ListNode(1)
linkedList1.next = new ListNode(2)
linkedList1.next.next = new ListNode(4)

let linkedList2 = new ListNode(1)
linkedList2.next = new ListNode(3)
linkedList2.next.next = new ListNode(4)

module.exports = {
    linkedList,
    linkedList1,
    linkedList2,
    ListNode
}