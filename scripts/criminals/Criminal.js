export const criminal = (criminalObject) => {
  return `<h2>${criminalObject.name}</h2>
   <h3>${criminalObject.conviction}</h3>
        <ul>
            <li>Age: ${criminalObject.age}</li>
            <li>Crime: ${criminalObject.conviction}</li>
            <li>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString(
              "en-US"
            )}</li>
            <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString(
              "en-US"
            )}</li>
            
       </ul>`;
};
