import { getOfficers, useOfficers } from "../officers/OfficerDataProvider.js";
import { CriminalList } from '../criminals/criminalList.js'

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officers");

const eventHub = document.querySelector("main")

export const OfficerSelect = () => {
    getOfficers().then(() => {
      let allTheOfficers = useOfficers();
      // console.log(allTheOfficers);
  
      render(allTheOfficers);
    });
  };

  const render = (OfficersCollection) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="OfficerSelect">
        <option value="0">Please select an officer...</option>

        // .map is here looping over convictionsCollection
        // .map always takes a function fat arrow
        ${OfficersCollection.map((officersObject) => {
          const officer = officersObject.name;
          return `<option>${officer}</option>`;
        })}
    </select>
`;
};


eventHub.addEventListener("change", changeEvent => {
  if (changeEvent.target.id === "officerSelect") {
    const selectedOfficer = changeEvent.target.value
    CriminalList(null, selectedOfficer);
  }
 
  if (changeEvent.target.id === "OfficerSelect") {
    console.log("You selected something from the officer dropdown");
    console.log(
      "This is the officer that was selected: ",
      changeEvent.target.value
    );
    // Your code goes here!

    CriminalList(null, changeEvent.target.value);
  }
});
