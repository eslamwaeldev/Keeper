import React, { useState } from "react";

function InsertNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  return (
    <div className="flex-container">
      <div className="insert-note">
        <h1>
          <input
            placeholder="Title"
            value={note.title}
            onChange={(event) => {
              const title = event.target.value;
              setNote({ title: title });
              props.isAddNote();
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
              props.isAddNote();
            }}
          />
        </p>
        {props.addNote && <button>Add</button>}
      </div>
    </div>
  );
}

export default InsertNote;
