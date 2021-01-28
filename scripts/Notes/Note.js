export const note = (noteObject) => {
    return `<section class = "noteDate"><h1>Note: ${noteObject.date}</h1>
    <p class="suspect">Suspect: ${noteObject.suspect}</p> 
   <p class="note-Text__">Note: ${noteObject.noteText}</p>
      </section>`;
  };
  