const colors = ["Black", "Purple", "Green", "Orange"]
const newColorsStr = colors.toString()
const indArr = newColorsStr.split(",")
console.log(newColorsStr, indArr)
// console.log(colors)
// console.log(colors.length)
colors.pop()
colors.push("Red")

colors.shift()
colors.unshift("Blue")
// console.log(colors)
const countries = ["Pakistan", "Russia", "China"]
const newCountries = countries.slice(0,2)
// console.log(newCountries)

const cities = ["FSB", "ISB", "MUL", "KR"]
// 0 FOR REPLACEMENT OF VALUE
// 1 FOR DELETION OF CURRENT VALUE
cities.splice(1, 1, "SGD")
// console.log(cities)

const newArray = colors.concat(countries, cities)
const clrCT = [ ...colors, ...cities, "Fruits" ]

// console.log(newArray, `Cities Colors:`, clrCT)

