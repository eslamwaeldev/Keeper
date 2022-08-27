import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import sampleNotes from "./notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState("false");
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  return (
    <>
      <Header />
      <div className="note">
        <h1>
          <input
            value={note.title}
            onChange={(event) => {
              const title = event.target.value;
              setNote({ title: title });
            }}
          />
        </h1>
        <p>
          <input
            value={note.content}
            onChange={(event) => {
              const content = event.target.value;
              setNote({ content: content });
            }}
          />
        </p>
      </div>
      {sampleNotes.map((note) => {
        return <Note key={note.key} title={note.title} content={note.content} />;
      })}
      <Footer />
    </>
  );
}
export default App;
