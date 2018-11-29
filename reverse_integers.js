//Given a 32-bit signed integer, reverse digits of an integer.

function reverse(strNum) {
    let startingInd = 0;
    let result = '';
  
    if(strNum[0] == '-') {
      console.log(7)
      result += '-'
      startingInd++
    } else if (strNum[0] == '0') {
      while (strNum[startingInd] == '0' && startingInd<strNum.length) {
        startingInd++
      }
    }
    for (let i=strNum.length-1; i>=startingInd; i--) {
      result += strNum[i]
    }
    return result
  }
  
  reverse('000123')