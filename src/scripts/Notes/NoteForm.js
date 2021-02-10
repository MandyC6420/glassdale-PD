import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { saveNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js"

const contentTarget = document.querySelector(".noteFormContainer");

export const NoteForm = () => {
  contentTarget.innerHTML = `
  <fieldset>
  <label for="note-text">Notes:</label>
  <input type="text" name="notes" id="note_form" />
  </fieldset>
  <fieldset>
  <label for="date of note">Date:</label>
  <input type="date" name="note-date" id="date_form" />
  </fieldset>
  <fieldset>
  <label for="suspect">Suspect:</label>
  <input type="suspect" name="note-suspect" id="suspect_form" />
  </fieldset>

        <button type="button" id="saveNote" class="btn btn-dark">Save Note</button>
    `;


};

const eventHub = document.querySelector(".noteFormContainer");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    let noteInput = document.getElementById("note_form")
    let dateInput = document.getElementById("date_form")
    let suspectInput = document.getElementById("suspect_form")
    // Make a new object representation of a note
    const newNote = {
      noteText: noteInput.value,
      // date: dateInput.value,
      // suspect: suspectInput.value,
    };

    // Change API state and application state

    saveNote(newNote).then(NoteList); // Refresh your list of notes once you've saved your new one
    
  }
});



export const CriminalSelect = () => {
  getCriminals().then(() => {
    const criminals = useCriminals()
    renderCriminalDropdown(criminals)
  })
}

const renderCriminalDropdown = (criminalCollection) => {
  contentTarget.innerHTML = `

  <fieldset>
  <label for="note-text">Notes:</label>
  <input type="text" name="notes" id="note_form" />
  </fieldset>
  
  
  <select class="dropdown" id="CriminalSelect">
      <option value="">Please select a suspect...</option>

      

      // .map is here looping over convictionsCollection
      // .map always takes a function fat arrow
  
      ${criminalCollection.map((criminalObject) => {
        const criminalName = criminalObject.name;
        return `<option value ="${criminalObject.id}">${criminalName}</option>`;
      })}
      
      
  </select>
  </div>
  <button type="button" id="saveNote" class="btn btn-dark">Save Note</button>
`;
};
