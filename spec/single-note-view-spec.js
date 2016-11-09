function testSingleNoteInstantiation() {
  var note = new Note("hi there");
  var singleNote = new SingleNote(note)
  assert.isTrue(singleNote.singleNote === note);
}

testSingleNoteInstantiation()

function testSingleNoteHTML() {
  var note = new Note("hi there");
  var singleNote = new SingleNote(note)
  assert.isTrue(singleNote.getSingleHTML() === "<div>hi there</div>");
}

testSingleNoteHTML();
