//Stock problem 
//Given an array of stock prices and another array with corresponsidng day, 
//find the best day to buy and sell stocks
//return highest profit

function stocks(prices, day) {
  let max = 1;
  let min = 0;
  let currMin = 0;

  if (prices.length<2) {
      return 'Error, need atleast two days'
  }

  for (var i=1; i<prices.length; i++) {
    if (prices[i] < prices[currMin]) {
        currMin = i
    }

    if (prices[max] - prices[min] < prices[i] - prices[currMin]) {
        max = i
        min = currMin
    }
  }

  let profit = prices[max] - prices[min]
  return profit
}

stocks([3,4,6,1,5,7,11,23,5], [1,2,3,4,5,6,7,8,9])