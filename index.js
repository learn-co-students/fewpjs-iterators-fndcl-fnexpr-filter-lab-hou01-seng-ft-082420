// Code your solution here
const findMatching = (drivers, string) => {
    let matchingDrivers = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return matchingDrivers
}

const fuzzyMatch = (drivers, string) => {
    let matches = drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
    return matches
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
}