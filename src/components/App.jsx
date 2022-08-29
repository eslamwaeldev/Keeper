import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import sampleNotes from "./notes";
import InsertNote from "./InsertNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState(false);
  function isReadyToAdd() {
    setAddNote(true);
  }

  return (
    <>
      <Header />
      <InsertNote isAddNote={isReadyToAdd} addNote={addNote} />

      <div className="grid-container">
        {sampleNotes.map((note, index) => {
          return (
            <div key={index} className="grid-items">
              <Note key={note.key} title={note.title} content={note.content} />
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
export default App;
