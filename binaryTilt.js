// Input: 
//          1
//        /   \
//       2     3
// Output: 1
// Explanation: 
// Tilt of node 2 : 0
// Tilt of node 3 : 0
// Tilt of node 1 : |2-3| = 1
// Tilt of binary tree : 0 + 0 + 1 = 1


var findTilt = function(root) {
    let tilt = 0;
    
    function postOrder(root) {
        if (root === null) {
            return 0;
        }
        let left = postOrder(root.left)
        let right = postOrder(root.right)
        tilt += Math.abs(left-right)
        return root.val + left + right
    }
    postOrder(root)
    return tilt
}