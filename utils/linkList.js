function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let linkedList = new ListNode(1)
linkedList.next = new ListNode(2)
linkedList.next.next = new ListNode(3)
linkedList.next.next.next = new ListNode(4)

module.exports = linkedList