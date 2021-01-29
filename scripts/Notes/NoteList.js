import { getNotes, saveNote } from "./NoteDataProvider.js";
import { note } from "./Note.js";

export const NoteList = () => {
  getNotes().then(() => {
    let noteContainer = document.querySelector(".noteFormContainer");
    let allTheNotes = saveNote();

    let NoteListHTML = "";

    for (let i = 0; i < allTheNotes.length; i++) {
      noteListHTML += note(allThenotes[i]);
    }

    noteContainer.innerHTML = noteListHTML;

    console.log(noteListHTML);

    // Now that you have the data, what component should be rendered?
  });
};

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})

const NoteForm = () => {
    // rest of the code here
}