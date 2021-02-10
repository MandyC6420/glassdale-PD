import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { criminal } from "./Criminal.js";

export const CriminalList = (convictionFilter, officerFilter) => {
  getCriminals().then(() => {
    let criminalContainer = document.querySelector(".criminal-list");
    let allTheCriminals = useCriminals();

    let criminalListHTML = "";

    if (convictionFilter) {
        allTheCriminals = allTheCriminals.filter((currentCriminal) => {
        return currentCriminal.conviction === convictionFilter;
      });
    }

    if (officerFilter) {
      allTheCriminals = allTheCriminals.filter((currentCriminal) => {
      return currentCriminal.arrestingOfficer === officerFilter;
    });
  }
    
    for (let i = 0; i < allTheCriminals.length; i++) {
      criminalListHTML += criminal(allTheCriminals[i]);
    }

    criminalContainer.innerHTML = criminalListHTML;

    // console.log(criminalListHTML);

    // Now that you have the data, what component should be rendered?
  });
};

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  return CriminalList();
});
