import { useState, useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import styles from "./Note.module.css";
import { NotesContext } from "../context/NotesContext";
import useNoteColor from "../hooks/useNoteColor";
import EditNoteModal from "./EditNoteModal";

const Note: React.FC<{ text: string | number; id: number; type: string }> = (
  props
) => {
  const [editNote, setEditNote] = useState<boolean>(false);
  

  const ctx = useContext(NotesContext);

  const date = new Date();
  const currDate = date.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const deleteNoteHandler = () => {
    ctx.deleteNoteHandler(props.id);
  };

  const editNoteHandler = () => {
    setEditNote(true);
  };

  const closeEditModalHandler = (modalState: boolean) => {
    setEditNote(modalState);
  };

  const noteColor = useNoteColor(props.type);

  return (
    <section
      className={styles.note}
      style={{ backgroundColor: noteColor?.noteBodyColor }}>
      <div
        className={styles["note-menu"]}
        style={{ backgroundColor: noteColor?.noteMenuColor }}>
        <p>{currDate}</p>
        <div className={styles["note-buttons"]}>
          <BiSolidPencil
            className={styles["note-button"]}
            onClick={editNoteHandler}
          />
          <MdClose
            className={styles["note-button"]}
            onClick={deleteNoteHandler}
          />
        </div>
      </div>
      <p className={styles["note-text"]}>{props.text}</p>
      {editNote && (
        <EditNoteModal
          text={props.text}
          id={props.id}
          onCloseModal={closeEditModalHandler}
        />
      )}
    </section>
  );
};

export default Note;
