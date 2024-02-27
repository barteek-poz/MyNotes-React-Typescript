import { Fragment, useContext, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./EditNoteModal.module.css";
import { NotesContext } from "../context/NotesContext";

export const Backdrop: React.FC<{}> = () => {
  return <div className={styles.backdrop}></div>;
};

export const ModalOverlay: React.FC<{
  text: string | number;
  id: number;
  onCloseModal: (modalState: boolean) => void;
}> = (props) => {
  const [error, setError] = useState<boolean>(false);
  const ctx = useContext(NotesContext);

  const editedNoteRef = useRef<HTMLTextAreaElement>(null);
  const closeModal = () => {
    props.onCloseModal(false);
  };

  const editNoteHandler = () => {
    if (editedNoteRef.current?.value === "") {
      setError(true);
      return;
    } else {
      ctx.editNoteHandler(props.id, editedNoteRef.current!.value);
      closeModal();
    }
  };

  return (
    <div className={styles["modal-body"]} id="edit-modal-body">
      <h3>Edit note</h3>
      <textarea id="edit-modal-textarea" defaultValue={props.text} ref={editedNoteRef}></textarea>
      {error && <p className={styles.error}>The note cannot be empty</p>}
      <div className={styles.buttons}>
        <Button onClick={editNoteHandler}>Save</Button>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </div>
  );
};

const EditNoteModal: React.FC<{
  text: string | number;
  id: number;
  onCloseModal: (modalState: boolean) => void;
}> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          text={props.text}
          id={props.id}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
};

export default EditNoteModal;
