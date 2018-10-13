//Create a webpage that allows the user to type in two numbers (numRows and numCols) 
//and prints an HTML table containing the numbers from 1...numRows*numCols in a 
//winding pattern: go down the first column, then up the second column, then down 
//the third column, etc. For example, if numRows=4 and numCols=5, the output would be: 

// [[ 1 8 9 16 17],
// [2 7 10 15 18 ],
// [3 6 11 14 19 ],
// [4 5 12 13 20]]

function winding(x,y) {
var ans =[]
var entry = 1

  for (var i=1; i<=y; i++) {
    let temp = []
    if (i%2 !== 0) { //increasing
      for (var j = entry; j<entry+x; j++) {
        temp.push(j)
      }  

    } else {  //decreasing
      for (var j = entry+x-1; j>=entry; j--) {
        temp.push(j)
      }

    }
    entry = entry+x
    ans.push(temp)

  }
  return ans
}

winding(4,5)

//Another way of doing it


function winding(y,x) {
  let ans = []
  let count = 1;

  for (var i=1; i<=x; i++) {
    let temp = [];
    for (var j=1; j<=y; j++) {
      temp.push(count)
      count++
    }
    if (i%2 === 0) {
      ans.push( temp.reverse())
    } else {
      ans.push(temp)
    }
  }
  console.log(ans)
}


winding(4,5)