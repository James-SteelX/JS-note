function testNoteListView() {
  var noteList = new NoteList();
  noteList.createNote("hi there");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div><a href="#notes/9">hi there</a></div></li></ul>');
}

testNoteListView();

function testNoteListViewWithNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "");
}
testNoteListViewWithNoNotes()


function testNoteListViewWithManyNotes() {
  var noteList = new NoteList();
  noteList.createNote("hi there");
  noteList.createNote("again?");
  noteList.createNote("hello");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div><a href="#notes/10">hi there</a></div></li><li><div><a href="#notes/11">again?</a></div></li><li><div><a href="#notes/12">hello</a></div></li></ul>');
}
testNoteListViewWithManyNotes()

function testNoteListViewShortensNotesWhenLong() {
  var noteList = new NoteList();
  noteList.createNote('HELLODAVIDHELLOJAMES!!!')
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div><a href="#notes/13">HELLODAVIDHELLOJAMES</a></div></li></ul>');
}
testNoteListViewShortensNotesWhenLong()
