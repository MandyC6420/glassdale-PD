console.log("Welcome to the main module")

import { CriminalList } from "./criminals/CriminalList.js"

// CriminalList()

import { OfficerList } from "./officers/OfficerList.js"

// OfficerList()

import { ConvictionList } from "./convictions/convictionList.js"

ConvictionList()

import { FacilityList } from "./facility/facilityList.js"

// FacilityList()

const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
  const bodyElement = document.querySelector("body")

  // Add a class
  bodyElement.classList.toggle("dark-background")
})