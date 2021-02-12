export const note = (singleNote, relatedCriminal) => {
  
    return `
    <div class="card">
    <section class="noteDate">
    <div class="card-body">
      <h1>Date: ${singleNote.date}</h1>
      <p class="suspect">Suspect: ${relatedCriminal}</p>
      <p class="note-Text__">Note: ${singleNote.noteText}</p>
      <button id="deleteNote--${singleNote.id}">Delete</button>
      </div>
    </section>
    
    `;
    
}

{/* <select id="noteForm--criminal" class="criminalSelect">
<option value="">Please Select a Criminal...</option>
${allCriminals.map((currentCriminalInLoop) => {
    return `<option value="${currentCriminalInLoop.id}">
    ${currentCriminalInLoop.name}</option>
    `
}).join("")}
</select>
` */}

