// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var middleNode = function(head) {
    let count = 0;
    let runner = head;
    while (runner) {
        count++
        runner = runner.next
    }
    
    let midPoint = Math.ceil(count/2)
    for (let i = 0; i < midPoint - 1; i++) {
        head = head.next;
    }
    return head;
};