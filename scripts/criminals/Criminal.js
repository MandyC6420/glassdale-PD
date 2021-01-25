export const criminal = (criminalObject) => {
  return `<section class = "criminal-card"><h2>${criminalObject.name}</h2>
   <h3>Crime Committed: ${criminalObject.conviction}</h3>
        <ul>
            <li>Age: ${criminalObject.age}</li>
             <li>Term Start: ${new Date(
               criminalObject.incarceration.start
             ).toLocaleDateString("en-US")}</li>
            <li>Term End: ${new Date(
              criminalObject.incarceration.end
            ).toLocaleDateString("en-US")}</li>
            
       </ul>
       </section>`;
       
};
