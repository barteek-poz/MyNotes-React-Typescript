import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./ConfirmModal.module.css";
import { NotesContext } from "../context/NotesContext";

export const Backdrop: React.FC<{}> = () => {
  return <div className={styles.backdrop}></div>;
};

export const ModalOverlay: React.FC<{ onCloseModal: () => void }> = (props) => {
  const ctx = useContext(NotesContext);

  const deleteNotes = () => {
    ctx.deleteAllNotesHandler();
    props.onCloseModal();
  };

  return (
    <div className={styles["modal-body"]} id="edit-modal-body">
      <h3>Confirmation</h3>
      <p>Are you sure you want to delete the notes?</p>
      <div className={styles.buttons}>
        <Button onClick={deleteNotes}>Delete</Button>
        <Button onClick={props.onCloseModal}>Cancel</Button>
      </div>
    </div>
  );
};

const ConfirmModal: React.FC<{ onCloseModal: () => void }> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCloseModal={props.onCloseModal} />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
};

export default ConfirmModal;
