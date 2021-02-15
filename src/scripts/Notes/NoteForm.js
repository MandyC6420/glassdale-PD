import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { saveNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js"

const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
  getCriminals().then(() => {
    let allTheCriminals = useCriminals()
  
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
        <select id="criminal-Select" class="noteForm--criminal">
        <option value="">Please Select a Criminal...</option>
        ${allTheCriminals.map((currentCriminalInLoop) => {
            return `<option id ="criminal--id" value="${currentCriminalInLoop.id}">
            ${currentCriminalInLoop.name}</option>
            `
        }).join("")}
        </select>
        `
    })
    } // buidling the form - need an input or property of the note`;





eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    let noteInput = document.getElementById("note_form").value
    let dateInput = document.getElementById("date_form").value
    let idInput = document.getElementById("criminal-Select").value
    // Make a new object representation of a note
    const newNote = {
      noteText: noteInput,
      date: dateInput,
      criminalId: idInput
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

  <fieldset>
  <label for="date of note">Date:</label>
  <input type="date" name="note-date" id="date_form" />
  </fieldset>
  
  
  <select class="dropdown" id="criminal-Select">
      <option value="">Please select a suspect...</option>

      

      // .map is here looping over convictionsCollection
      // .map always takes a function fat arrow
  
      ${criminalCollection.map((criminalObject) => {
        const criminalName = criminalObject.name;
        return `<option id = "criminal--id" value ="${criminalObject.id}">${criminalName}</option>`;
      })}
      
      
  </select>
  </div>
  <button type="button" id="saveNote" class="btn btn-dark">Save Note</button>
`;
};
