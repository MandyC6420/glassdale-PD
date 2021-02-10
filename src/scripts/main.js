console.log("Welcome to the main module");

import { CriminalList } from "./criminals/CriminalList.js";

// CriminalList()

import { OfficerList } from "./officers/OfficerList.js";

// OfficerList()

// import { ConvictionList } from "./convictions/convictionList.js";

// ConvictionList();

import { FacilityList } from "./facility/facilityList.js";

// FacilityList()

import { NoteForm } from "./Notes/NoteForm.js"
NoteForm()

import { NoteList } from "./Notes/NoteList.js"


import { ConvictionSelect } from "./convictions/ConvictionSelect.js";

ConvictionSelect()

import { OfficerSelect } from "./officers/OfficerSelect.js"

OfficerSelect()

import { WitnessList } from "./witnesses/WitnessList.js"

import { getAssociate } from "./criminals/AssociateList.js"

// getAssociate()

// import {NoteForm} from "./Notes/NoteForm"
// NoteForm()

import { CriminalSelect } from "./Notes/NoteForm.js"
CriminalSelect()





// const darkModeButton = document.querySelector("#dark-mode");
// darkModeButton.addEventListener("click", function () {
//   // Select the entire body tag
//   const bodyElement = document.querySelector("body");

//   // Add a class
//   bodyElement.classList.toggle("dark-background");
// });
