/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { CriminalList } from "../criminals/CriminalList.js";
import { getConvictions, useConvictions } from "./ConvictionProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
  getConvictions().then(() => {
    let allTheConvictions = useConvictions();
    // console.log(allTheConvictions);

    render(allTheConvictions);
  });
};

const render = (convictionsCollection) => {
  /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        
    */

  contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>

            // .map is here looping over convictionsCollection
            // .map always takes a function fat arrow
            ${convictionsCollection.map((convictionObject) => {
              const crime = convictionObject.name;
              return `<option>${crime}</option>`;
            })}
        </select>
    `;
};

// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("main");
eventHub.addEventListener("change", (eventObject) => {
  console.log("You clicked somewhere in the main container");

  // To be more specific, we need to know specifically what we clicked on
  console.log("Here is the element you clicked on: ", eventObject.target);

  if (eventObject.target.id === "crimeSelect") {
    console.log("You selected something from the crime dropdown");
    console.log(
      "This is the crime that was selected: ",
      eventObject.target.value
    );
    // Your code goes here!

    CriminalList(eventObject.target.value);
  }
});
