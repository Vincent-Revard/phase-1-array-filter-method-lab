// Code your solution here


const findMatching = (drivers, entry) => {
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === entry.toLowerCase())
    return matchingDrivers
}

const fuzzyMatch = (drivers, firstLetter) => {
    const fuzzyDrivers = drivers.filter(driver => driver.startsWith(firstLetter))
    return fuzzyDrivers
    
}

const matchName = (drivers, firstName) => {
    const matchingFirstName = drivers.filter(drivers => drivers.name === firstName)
    return matchingFirstName
}

