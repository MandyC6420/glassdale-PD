export const conviction = (convictionObject) => {
    return`
    <ul>
    <li>${convictionObject.age}</li>
    <li>Crime: ${criminalObject.conviction}</li>
    <li>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString(
        "en-US"
      )}</li>
      <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString(
        "en-US"
      )}</li>
    </ul>`
}