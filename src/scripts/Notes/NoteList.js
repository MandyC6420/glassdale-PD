import { getNotes, useNotes } from "./NoteDataProvider.js";
import { note } from "./Note.js";

export const NoteList = () => {
  // clear the container
  document.querySelector(".noteContainer").innerHTML = "";
  getNotes().then(() => {
    let noteContainer = document.querySelector("#note-Form-Container");
    let allTheNotes = useNotes();

    let noteListHTML = "";

    for (let i = 0; i < allTheNotes.length; i++) {
      noteListHTML += note(allTheNotes[i]);
    }

    noteContainer.innerHTML = noteListHTML;
  });
};

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  noteListHTML();
});
