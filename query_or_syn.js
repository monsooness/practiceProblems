// Given a list of synonym pairs, write a function to determine if some pairs of queries are synonyms. 
// Two queries are synonyms if you can match them (considering synonyms), word by word in order.


let syn = {'rate': 'ratings', 'approval': 'popularity'}
let query = [[["obama", "approval", "rate"], ["obama", "popularity", "ratings"]], [["obama", "approval", "rates"], ["obama", "popularity", "ratings"]], [["obama", "approval", "rate"], ["popularity", "ratings", "obama"]],[["obama", "approval", "rate"], ["popularity", "ratings", "obama"]]]

function query_or_synonym(S,Q) {
  let result = [];
  Q.forEach( queries => {
      const query1 = queries[0];
      const query2 = queries[1];
      if (query1.length !== query2.length) {
        result.push(false)
      } else {
        for (let i=0; i<query1.length; i++) {
          if (query1[i] !== query2[i] && syn[query1[i]] !== query2[i] && syn[query2[i]] !== query1[i] ) {
             result.push(false)
             return;
          }
        }
        result.push(true)
      }
    })
  return result
}

query_or_synonym(syn, query)
