console.log("Welcome to the main module")

import { getCriminals, useCriminals } from "./criminals/CriminalDataProvider.js"

console.log(getCriminals())

console.log(useCriminals())