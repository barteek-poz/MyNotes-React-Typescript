import { Fragment, useRef, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./AddNoteModal.module.css";
import Button from "./Button";
import { NotesContext } from "../context/NotesContext";
import Select from "react-select";

interface options {
  value: string;
  label: string;
}

const selectOptions: options[] = [
  { value: "work", label: "Praca" },
  { value: "home", label: "Dom" },
  { value: "others", label: "Inne" },
];

export const Backdrop: React.FC<{}> = () => {
  return <div className={styles.backdrop}></div>;
};

export const ModalOverlay: React.FC<{ onClose: () => void }> = (props) => {
  const [selectedOption, setSelectedOption] = useState<options>();
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [formIsTouched, setFormIsTouched] = useState<boolean>(false);

  const noteRef = useRef<HTMLTextAreaElement>(null);
  const ctx = useContext(NotesContext);

  const addNoteHandler = () => {
    setFormIsTouched(true);
    if (noteRef.current?.value === "" || !selectedOption) {
      return;
    } else {
      setFormIsValid(true);
      ctx.saveNoteHandler({
        id: Math.random(),
        text: noteRef.current!.value,
        type: selectedOption!.value,
      });
      props.onClose();
    }
  };

  const selectOptionHandler = (option: any) => {
    setSelectedOption(option);
  };

  const formInvalid = !formIsValid && formIsTouched;

  return (
    <div className={styles["modal-body"]}>
      <h3>Dodaj notatkę</h3>
      <label htmlFor="categories">Wybierz kategorię</label>
      <Select
        id="categories"
        className={styles.select}
        options={selectOptions}
        placeholder={"Wybierz kategorie"}
        onChange={selectOptionHandler}
        value={selectedOption}
      />
      <label htmlFor="text">Wpisz treść notatki</label>
      <textarea id="text" className={styles.textarea} ref={noteRef}></textarea>
      <p className={styles.error}>
        {formInvalid && "Uzupełnij wszystkie pola"}
      </p>
      <div className={styles.buttons}>
        <Button onClick={addNoteHandler}>Zapisz</Button>
        <Button onClick={props.onClose}>Anuluj</Button>
      </div>
    </div>
  );
};

const AddNoteModal: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
};

export default AddNoteModal;
