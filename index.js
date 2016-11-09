var list = new NoteList();
list.createNote("Favourite drink: seltzer");
list.createNote("Favourite food: macaroni");
list.createNote("Favourite coach: hmm");
var noteController = new NoteController(list);
var htmlContent = noteController.generateHTML();
document.getElementById("app").innerHTML = htmlContent;
