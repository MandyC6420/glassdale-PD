export const criminal = (criminalObject, facilities) => {
  return `<div class="card w-60 text-center">
  <div class="card-body">
    <h1 class="criminal-card">${criminalObject.name}</h1>
    <h2 class="criminal-card">Crime Committed: ${criminalObject.conviction}</h2>
    <p class="card-text"> <ul>
    <li>Age: ${criminalObject.age}</li>
    <p>Arrested by ${criminalObject.arrestingOfficer}</p>
     <li>Term Start: ${new Date(
       criminalObject.incarceration.start
     ).toLocaleDateString("en-US")}</li>
    <li>Term End: ${new Date(
      criminalObject.incarceration.end
    ).toLocaleDateString("en-US")}</li>
    
</ul></p>

<div>
<h2>Facilities</h2>
<ul>
    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
</ul>
</div>
<div id ="button-div">
    <button class="associate-button" id="associates--${criminalObject.id}" onclick="this.disabled=true">Known Associates</button>
    </div>
    <div id="associate-container-${criminalObject.id}"></div>
    </div>
  
</div>`;
// </div>
// </div>




// <div id ="button-div">
//     <button class="associate-button" id="associates--${criminalObject.id}" onclick="this.disabled=true">Known Associates</button>
//     </div>
//     <div id="associate-container-${criminalObject.id}"></div>
//     </div>
  
// </div>`;
     }
    