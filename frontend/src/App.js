import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  const addNote = async () => {
    if (!text) return;
    await axios.post("http://localhost:5000/notes", { text });
    setText("");
    fetchNotes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Docker Notes App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note"
      />
      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
