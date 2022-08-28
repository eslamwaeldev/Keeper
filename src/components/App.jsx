import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import sampleNotes from "./notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  return (
    <>
      <Header />
      <div className="flex-container">
        <div className="insert-note">
          <h1>
            <input
              placeholder="Title"
              value={note.title}
              onChange={(event) => {
                const title = event.target.value;
                setNote({ title: title });
                setAddNote(true);
              }}
            />
          </h1>
          <p>
            <input
              placeholder="Content"
              value={note.content}
              onChange={(event) => {
                const content = event.target.value;
                setNote({ content: content });
                setAddNote(true);
              }}
            />
          </p>
          {addNote && <button>Add</button>}
        </div>
      </div>
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
