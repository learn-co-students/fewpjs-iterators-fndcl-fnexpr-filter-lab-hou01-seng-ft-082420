// Code your solution here
function findMatching(drivers, theOne){
    let solution = drivers.filter(d => d.toLowerCase() === theOne.toLowerCase())
    return solution
}

function fuzzyMatch(drivers, theOne){
    return drivers.filter(d=> d[0] === theOne[0])
}

function matchName(drivers, theOne){
    return drivers.filter(d=> {
        return d.name == theOne
    })
}