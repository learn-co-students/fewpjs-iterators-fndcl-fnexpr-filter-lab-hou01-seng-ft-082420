// Code your solution here
const findMatching = (array, name) => {
    let drivers = array.filter(driver => driver.toLowerCase() == name.toLowerCase())
    return drivers
}

const fuzzyMatch = (array, name) => {
    let letters = name.split('')[0] + name.split('')[1]
    let drivers = array.filter(driver => driver.substring(0, 2) == letters )
    return drivers
}

const matchName = (array, name) => {
    let drivers = array.filter(driver => driver.name == name)
    return drivers
}