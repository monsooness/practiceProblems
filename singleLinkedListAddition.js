// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

//Runtime?


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0)
  let head = List
  let sum = 0;
  let carry = 0;
    
  while(l1!==null || l2!==null || sum>0) {
    if (l1 !== null) {
        sum += l1.val
        l1 = l1.next
    }
    if (l2 !==null) {
        sum += l2.val
        l2 = l2.next
    }
    if (sum >= 10) {
        carry = 1
        sum = sum-10
    }
    head.next = new ListNode(sum)
    head = head.next
    sum = carry
    carry =0
  }
  return List.next
};