import { FaNoteSticky } from "react-icons/fa6";
import styles from "./Navigation.module.css";
import Button from "./Button";
import AddNoteModal from "./AddNoteModal";
import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import ConfirmModal from "./ConfirmModal";

const Navigation: React.FC<{}> = () => {
const ctx = useContext(NotesContext)

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteNotes, setDeleteNotes] = useState(false)

  const addNoteHandler = () => {
    setModalIsOpen(true);
  };

  const closeNoteModalHandler = () => {
    setModalIsOpen(false);
    setDeleteNotes(false)
  };

  const deleteNotesHandler = () => {
setDeleteNotes(true)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <FaNoteSticky /> <h1>MyNotes</h1>
      </div>
      <div className={styles.buttons}>
        <Button onClick={addNoteHandler}>Dodaj notatkę</Button>
        <Button onClick={deleteNotesHandler}>Usuń notatki</Button>
      </div>
      {modalIsOpen && <AddNoteModal onClose={closeNoteModalHandler} />}
      {deleteNotes&& <ConfirmModal onCloseModal={closeNoteModalHandler}/>}
    </nav>
  );
};

export default Navigation;
