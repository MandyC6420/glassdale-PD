import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { note } from "./Note.js";
import { getCriminals, useCriminals,} from "../criminals/CriminalDataProvider.js";

const eventHub = document.querySelector(".target-container")
let contentTarget = document.querySelector(".target-container");

export const NoteList = () => {
  
  getNotes()
    .then(getCriminals())
    .then(() => {
      let allTheNotes = useNotes();
      let allTheCriminals = useCriminals();
      
      const arrayofMatchingNotes = allTheNotes.map((singleNote) => {
        const relatedCriminal = allTheCriminals.find(criminal => criminal.id === +singleNote.criminalId
        );
        const notesHTML = note(singleNote, relatedCriminal)
        return notesHTML;
      });
      
      // console.log(notesHTML);
      const HTMLstring = arrayofMatchingNotes.join("");
      contentTarget.innerHTML = HTMLstring
    });
};

eventHub.addEventListener("click", (eventObject) => {
  console.log("you clicked me")
  console.log(eventObject.target.id)
  if(eventObject.target.id.startsWith("deleteNote")){
    const idToDelete = eventObject.target.id.split("--")[1]
    deleteNote(idToDelete)
    .then(NoteList)
  }
})

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  noteListHTML();
});
