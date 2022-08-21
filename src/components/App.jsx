import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import sampleNotes from "./notes";

function App() {
  return (
    <>
      <Header />
      {sampleNotes.map((note) => {
        return <Note key={note.key} title={note.title} content={note.content} />;
      })}
      <Footer />
    </>
  );
}
export default App;
