
function ListNode(val) {
     this.val = val;
     this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode('head');
    let tmp = head;
    let sum = 0;
    let add = 0;
    while (l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
        add = (sum >= 10) ? 1 :0;
        l1 && (l1 ? l1 = l1.next : '');
        l2 && (l2 ? l2 = l2.next : '');
        tmp.next = new ListNode(sum%10);
        tmp = tmp.next;
    }
    add && (tmp.next = new ListNode(add))
    return head.next;
};

let l1 = new ListNode(2);
l1.next = new ListNode(8);
let l2 = new ListNode(5)
console.log(addTwoNumbers(l1, l2))