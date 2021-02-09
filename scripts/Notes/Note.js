export const note = (noteObject) => {
  
    return `
    <div class="card">
    <section class="noteDate">
    <div class="card-body">
      <h1>Note: ${noteObject.date}</h1>
      <p class="suspect">Suspect: ${noteObject.suspect}</p>
      <p class="note-Text__">Note: ${noteObject.noteText}</p>
      </div>
    </section>
    
    `;
    
}

