export const criminal = (criminalObject) => {
  return `<div class="card w-60 text-center">
  <div class="card-body">
    <h1 class="criminal-card">${criminalObject.name}</h1>
    <h2 class="criminal-card">Crime Committed: ${criminalObject.conviction}</h2>
    <p class="card-text"> <ul>
    <li>Age: ${criminalObject.age}</li>
     <li>Term Start: ${new Date(
       criminalObject.incarceration.start
     ).toLocaleDateString("en-US")}</li>
    <li>Term End: ${new Date(
      criminalObject.incarceration.end
    ).toLocaleDateString("en-US")}</li>
    
</ul></p>
<div id="button-div">
    <button class="associate-button" id="associates--${criminalObject.id}" onclick="this.disabled=true">Known Associates</button>
    </div>
    <div id="associate-container-${criminalObject.id}"></div>
    </div>
  
</div>`;
       
};
