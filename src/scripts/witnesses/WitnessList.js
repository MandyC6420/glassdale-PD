import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
import { witness } from "./Witness.js";

let witnessContainer = document.querySelector(".witness-statement-container");
export const WitnessList = () => {
  getWitnesses().then(() => {
    let allTheWitnesses = useWitnesses();
    // console.log(allTheWitnesses);
    let witnessListHTML = "";

    for (let i = 0; i < allTheWitnesses.length; i++) {
      witnessListHTML += witness(allTheWitnesses[i]);
    }

    witnessContainer.innerHTML = witnessListHTML;

    // console.log(witnessListHTML);

    // Now that you have the data, what component should be rendered?
  });
};

document.querySelector("#witness-nav-link").addEventListener("click", () => {
  return WitnessList();
});
