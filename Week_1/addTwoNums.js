function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let x = new ListNode(2)
x.next = new ListNode(4)
x.next.next = new ListNode(3)

let y = new ListNode(5)
y.next = new ListNode(6)
y.next.next = new ListNode(4)

var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let carry = 0;
    let curr = dummyHead
    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = parseInt(sum / 10);
        curr.next = new ListNode(parseInt(sum % 10));
        console.log(curr)
        curr = curr.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return curr.next;
};

addTwoNumbers(x, y)