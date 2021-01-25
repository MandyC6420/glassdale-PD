export const criminal = (criminalObject) => {
   return `<h2>${criminalObject.name}</h2>
        <ul>
            <li>${criminalObject.age}</li>
            <li>${criminalObject.conviction}</li>
            <li>${criminalObject.incarceration}</li>
            <li>${Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
            <li>${Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
            
       </ul>`
        
}