import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { criminal } from "./Criminal.js";
import { getFacilities, useFacilities} from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

let contentTarget = document.querySelector(".criminal-list");

export const CriminalLIst = (convictionFilter, officerFilter) => {
  getCriminals().then(() => {
    let criminalContainer = document.querySelector(".criminal-list");
    let allTheCriminals = useCriminals();

    // let criminalLIstHTML = "";

    // if (convictionFilter) {
    //     allTheCriminals = allTheCriminals.filter((currentCriminal) => {
    //     return currentCriminal.conviction === convictionFilter;
    //   });
    // }

    // if (officerFilter) {
    //   allTheCriminals = allTheCriminals.filter((currentCriminal) => {
    //   return currentCriminal.arrestingOfficer === officerFilter;
    // });
  // // }
    
  //   for (let i = 0; i < allTheCriminals.length; i++) {
  //     criminalListHTML += criminal(allTheCriminals[i]);
  //   }

    // criminalContainer.innerHTML = criminalListHTML;

    // console.log(criminalListHTML);

    // Now that you have the data, what component should be rendered?
  });
};

export const CriminalFacilityList = (convictionFilter, officerFilter) => {
  // Kick off the fetching of both collections of data
  console.log(officerFilter)
  console.log(convictionFilter)
  getFacilities()
  .then(getCriminals)
      .then(getCriminalFacilities)
      .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              let criminals = useCriminals()

              let criminalLIstHTML = "";

              if (convictionFilter) {
                  criminals = criminals.filter((currentCriminal) => {
                  return currentCriminal.conviction === convictionFilter;
                });
              }
          
              if (officerFilter) {
                criminals = criminals.filter((currentCriminal) => {
                return currentCriminal.arrestingOfficer === officerFilter;
              });
            }
              // Pass all three collections of data to render()
              render(criminals, facilities, crimFac)
          
      
})

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  contentTarget.innerHTML = criminalsToRender.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return criminal(criminalObject, facilities)
      }
  ).join("")
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  console.log("you clicked me")
  CriminalFacilityList();
})
}
