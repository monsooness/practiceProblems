// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
    let steps = [];
    if (n === 1) {
        return 1
    } else if (n === 2) {
       return 2
    } else if (n>2) {
        num = []
        num[1] = 1
        num[2] = 2
        for (let i=3; i<=n; i++) {
            num[i] = num[i-1] + num[i-2]
        }
        return num[n]
    }
};