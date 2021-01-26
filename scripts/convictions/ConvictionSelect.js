/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
  getConvictions().then(() => {
    let allTheConvictions = useConvictions();
    console.log(allTheConvictions);

    
    render(allTheConvictions);
  });
};


const render = (convictionsCollection) => {
  /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */

  contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(convictionObject => {
                const crime = convictionObject.name
                return `<option>${crime}</option>`
            })}
        </select>
    `;
};
