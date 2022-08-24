// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers,n){
   let driver = drivers.filter((match) => match.toLowerCase() === n.toLowerCase());
   return  driver ;
}
function fuzzyMatch(drivers,n){
   let driver = drivers.filter((match) => match.toLowerCase().indexOf(n.toLowerCase()) === 0);
    return driver;
}

function matchName(drivers, n) {
   return drivers.filter((match) => match.name === n);
 }