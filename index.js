var list = new NoteList();
list.createNote("Favourite drink: seltzer");
list.createNote("Favourite food: macaroni");
list.createNote("Favourite coach: hmm");
list.createNote("This note is going to be very long just to test if it does what we actually want it to do!");
list.createNote("Result.")
var noteController = new NoteController(list);
noteController.renderList();
noteController.changeNote();
 
