import Note from "./Note";
import styles from "./NotesContainer.module.css";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

interface SingleNote {
  id: number;
  text: string;
  type: string;
}

const NotesContainer: React.FC<{}> = () => {
  const ctx = useContext(NotesContext);
const notesArr = ctx.notes as SingleNote[]
  return (
    <ul className={styles["note-container"]}>
      {notesArr.map((note) => (
        <li key={note.id}>
          <Note id={note.id} text={note.text} type={note.type}/>
        </li>
      ))}
    </ul>
  );
};

export default NotesContainer;
