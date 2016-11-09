var list = new NoteList();
list.createNote("Favourite drink: seltzer");
list.createNote("Favourite food: macaroni");
list.createNote("Favourite coach: hmm");
list.createNote("This note is going to be very long just to test if it does what we actually want it to do!");
list.createNote("Result.");
var noteController = new NoteController(list);
window.addEventListener("hashchange", noteController.showNoteOnPage());
noteController.renderList();



// function changenotetext() {
//   window.addEventListener("hashchange", noteController.showNoteOnPage());
//   console.log("im running");
// };
// changenotetext();
