import { FaNoteSticky } from "react-icons/fa6";
import styles from "./Navigation.module.css";
import Button from "./Button";
import AddNoteModal from "./AddNoteModal";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { useMediaPredicate } from "react-media-hook";
import { BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Navigation: React.FC<{}> = () => {
  const screenBiggerThan500 = useMediaPredicate("(min-width:500px)");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteNotes, setDeleteNotes] = useState(false);

  const addNoteHandler = () => {
    setModalIsOpen(true);
  };

  const closeNoteModalHandler = () => {
    setModalIsOpen(false);
    setDeleteNotes(false);
  };

  const deleteNotesHandler = () => {
    setDeleteNotes(true);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <FaNoteSticky /> <h1>MyNotes</h1>
      </div>
      <div className={styles.buttons}>
       {screenBiggerThan500 && <Button onClick={addNoteHandler}>Add note</Button>}
        {screenBiggerThan500 && <Button onClick={deleteNotesHandler}>Delete all notes</Button>}
        {!screenBiggerThan500 && <BiPlus className={styles.icon} onClick={addNoteHandler}/>}
        {!screenBiggerThan500 && <MdDelete  className={styles.icon} onClick={deleteNotesHandler} />}

      </div>
      {modalIsOpen && <AddNoteModal onClose={closeNoteModalHandler} />}
      {deleteNotes && <ConfirmModal onCloseModal={closeNoteModalHandler} />}
    </nav>
  );
};

export default Navigation;
