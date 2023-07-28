const useNoteColor = (props: string) => {
  let noteBodyColor;
  let noteMenuColor;

  switch (props) {
    case "work":
      noteBodyColor = "rgba(181,146,253,210)";
      noteMenuColor = "#dac9fe";
      break;

    case "home":
      noteBodyColor = "rgba(141, 224, 85, 0.900)";
      noteMenuColor = "#baeb99";

      break;

    case "others":
      noteBodyColor = "rgba(254,201,112,200)";
      noteMenuColor = "#fedfa9";
      break;

    default:
      noteBodyColor = "rgba(254,201,112,200)";
      noteMenuColor = "#fedfa9";
  }

  return {noteBodyColor, noteMenuColor};
};

export default useNoteColor;
