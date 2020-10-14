// Code your solution here
let drivers =[]
let string = " "

function findMatching(drivers, string){

  return drivers.filter( driver => 
      driver.toLowerCase() === string.toLowerCase()
  )
}


function fuzzyMatch(driver, string) {
  return driver.filter( driver => 
    driver.toLowerCase().indexOf(string.toLowerCase()) === 0
)
   
}

function matchName(driver, string) {
  return driver.filter( record => record.name === string)
}