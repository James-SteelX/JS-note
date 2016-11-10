var noteList = new NoteList();
noteList.createNote("Favourite drink: seltzer");
noteList.createNote("Favourite food: macaroni");
noteList.createNote("Favourite coach: hmm");
noteList.createNote("This note is going to be very long just to test if it does what we actually want it to do!");
noteList.createNote("Result.");
var noteController = new NoteController(noteList);
noteController.renderList();




// function changenotetext() {
//   window.addEventListener("hashchange", noteController.showNoteOnPage());
//   console.log("im running");
// };
// changenotetext();
