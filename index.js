var list = new NoteList();
list.createNote("Favourite drink: seltzer");
list.createNote("Favourite food: macaroni");
list.createNote("Favourite coach: hmm");
list.createNote("This note is going to be very long just to test if it does what we actually want it to do!");
list.createNote("Result.")
var noteController = new NoteController(list);
noteController.renderList();
changeNote()

function changeNote() {
  window.addEventListener("hashchange", showNoteOnPage);
};

function showNoteOnPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  var urlID = location.hash.split("#notes/")[1];
  return noteController.noteListView.list.notes[urlID].getText();
};

function showNote(note) {
  document
    .getElementById("note")
    .innerHTML = note;
};
