// Code your solution here
function findMatching (drivers, name){
    return drivers.filter(function(driver){
       return driver.toLowerCase() === name.toLowerCase();
    })
}


// function fuzzyMatch (drivers, name){
//     return drivers.filter(function(driver){
//         return 
//     })
// }

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.charAt(0) === name.charAt(0))
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}