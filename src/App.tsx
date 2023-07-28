import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import NotesContainer from "./components/NotesContainer";
import NotesContextProvider from "./context/NotesContext";

function App() {
  return (
    <NotesContextProvider>
      <main className={styles["app-body"]}>
        <Navigation />
        <NotesContainer />
        
      </main>
    </NotesContextProvider>
  );
}

export default App;
