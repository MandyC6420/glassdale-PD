import { getNotes, saveNote, useNotes } from "./NoteDataProvider.js";
import { note } from "./Note.js";

export const NoteList = () => {
  getNotes().then(() => {
    let noteContainer = document.querySelector(".noteFormContainer");
    let allTheNotes = useNotes();

    // let NoteListHTML = "";

    let noteListHTML = "";

    for (let i = 0; i < allTheNotes.length; i++) {
      noteListHTML += note(allTheNotes[i]);
    }

    noteContainer.innerHTML = noteListHTML;

    // console.table(noteListHTML);
    

    // noteContainer.innerHTML = `
    // <table class="notes-table">
    //     <tr>
    //     <th class="table-category">Date</th>
    //     <th class="table-category">Suspect</th>
    //     <th class="table-category-notes">Notes</th>
    //     </tr>
    
    //     ${noteListHTML}
    // `


})
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  noteListHTML()
 
})

