// Part 1: Your coworkers are all awesome, but you wish they could get to know each other better. So, you've decided to write some code that picks four coworkers at random to all have lunch together! The catch: each coworker is available only some days of the week.

// Input: a map from coworker username -> list of days of the week available, e.g.
// {
// 'user1': ['Monday', 'Tuesday'],
// 'user2': ['Tuesday', 'Wednesday', 'Thursday', ...]
// ...
// }

// Output: a list of maps of group of four coworkers -> shared day, for all possible groups. (If a group has multiple shared days, just return one of them.)

// Part 2: Now, suppose you want all your coworkers to have lunch together every week. How would you go about writing code that will group all your coworkers into quartets? What challenges will you face?

let info = {
'user1': ['Monday', 'Tuesday'],
'user2': ['Tuesday', 'Wednesday', 'Thursday'],
'user3': ['Monday', 'Tuesday'],
'user4': ['Tuesday', 'Friday'],
'user5': ['Monday', 'Wednesday'],
'user6': ['Tuesday', 'Thursday'],
'user7': ['Monday', 'Tuesday'],
'user8': ['Wednesday', 'Thursday'],
'user9': ['Monday', 'Tuesday'],
'user10': ['Wednesday', 'Thursday']
}

//Part 1)

function configureLunch(obj) {
 if (obj.length < 4) {
   return 'Work hard till you need more than 4 co-workers'
 }
  let week = {}
 for (let item in obj) {
   for (let day in obj[item]) {
     week[obj[item][day]] = []
   }
 }
 let temp = [];
 let count = 0;
 for (let day in week) {
   for (let user in info) {
     if (info[user].includes(day) && !temp.includes(user) && week[day].length < 4) {
       temp.push(user)
       week[day].push(user)
     }
   }
 }
 return week
}
configureLunch(info)
