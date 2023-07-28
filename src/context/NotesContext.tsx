import { createContext, useState, ReactNode, useEffect } from "react";

interface SingleNote {
  id: number;
  text: string | number;
  type: string;
}

type NotesType =
  | string
  | []
  | SingleNote[]
  | ((prevState: SingleNote[]) => SingleNote[])
  | ((
      currNote: SingleNote[]
    ) => { text: string | number; id: number; type: string }[]);

const initialNotesArr = window.localStorage.getItem('NotesArray')
const initialNotesState = initialNotesArr === null ? [] : JSON.parse(initialNotesArr)
    
const initialState = {
  notes: [] as NotesType,
  saveNoteHandler: (noteData: SingleNote) => {},
  deleteNoteHandler: (noteID: number) => {},
  deleteAllNotesHandler: () => {},
  editNoteHandler: (noteID: number, noteText: string | number) => {},
};

type NotesContextProviderProps = {
  children: ReactNode;
};

export const NotesContext = createContext(initialState);

const NotesContextProvider = ({ children }: NotesContextProviderProps) => {
  const [notes, setNotes] = useState<NotesType>(initialNotesState);

  const saveNoteHandler = (noteData: SingleNote) => {
    const newNote = {
      id: noteData.id,
      text: noteData.text,
      type: noteData.type,
    };
    setNotes([...(notes as Array<SingleNote>), newNote]);
  };

  const deleteNoteHandler = (noteID: number) => {
    setNotes((prevNotes: SingleNote[]) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== noteID);
      return updatedNotes;
    });
  };

  const editNoteHandler = (noteID: number, noteText: string | number) => {
    setNotes((currNote: SingleNote[]) =>
      currNote.map((note) => {
        if (note.id === noteID) {
          return { ...note, text: noteText };
        }
        return note;
      })
    );
  };

  const deleteAllNotesHandler = () => {
    setNotes([]);
  };

  useEffect(() => {
    localStorage.setItem("NotesArray", JSON.stringify(notes));
  }, [notes]);

  

  return (
    <NotesContext.Provider
      value={{
        notes,
        saveNoteHandler,
        deleteNoteHandler,
        deleteAllNotesHandler,
        editNoteHandler,
      }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
