const contentTarget = document.querySelector(".noteFormContainer");

export const NoteForm = () => {
  contentTarget.innerHTML = `
  <fieldset>
  <label for="note-text">Notes:</label>
  <input type="text" name="notes" id="note_form" />
</fieldset>
<label for="date of note">Date:</label>
  <input type="date" name="note-date" id="note_form" />
</fieldset>
<label for="suspect">Suspect:</label>
  <input type="suspect" name="note-suspect" id="note_form" />
</fieldset>

        <button id="saveNote">Save Note</button>
    `;
};

