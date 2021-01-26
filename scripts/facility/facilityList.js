import { useFacility, getFacility } from "./FacilityDataProvider.js";
import { facility } from "./facility.js";

let facilityContainer = document.querySelector(".facilities-list");
export const FacilityList = () => {
  getFacility().then(() => {
    let allTheFacilities = useFacility();
    console.log(allTheFacilities);
    let facilityListHTML = "";

    for (let i = 0; i < allTheFacilities.length; i++) {
      facilityListHTML += facility(allTheFacilities[i]);
    }

    facilityContainer.innerHTML = facilityListHTML;

    console.log(facilityListHTML);

    // Now that you have the data, what component should be rendered?
  });
};

document.querySelector("#facilitiesnav-link").addEventListener("click", () => {
  return FacilityList()
})
