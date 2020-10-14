// Code your solution here
const findMatching = (drivers, name) => {
const list = drivers.filter(obj => obj.toLowerCase() == name.toLowerCase())
return list
}

const fuzzyMatch = (drivers, letters) => {
    const list = drivers.filter( obj => obj.startsWith(letters))
    return list
}

const matchName = (drivers, name) => {
    const list = drivers.filter( obj => obj.name == name)
    return list
}

