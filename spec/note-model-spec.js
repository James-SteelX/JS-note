// var Note = require("./src/note-model");

function testNoteInstantiatesWithIDofZero(string) {
  var note = new Note(string);
  assert.isTrue(note.id === 0);
}
testNoteInstantiatesWithIDofZero('Zero id')

function testNoteIncrementsIDByOne() {
  var note = new Note('One id');
  var note2 = new Note('Two id');
  assert.isTrue(note.id === 1);
  assert.isTrue(note2.id === 2);
}
testNoteIncrementsIDByOne()

function testNoteInstantiatesWithText(string) {
  var note = new Note(string);
  assert.isTrue(note.text === string);
}

testNoteInstantiatesWithText('I really dislike JavaScript!');

function testNoteReadTextMethod(string) {
  var note = new Note(string);
  assert.isTrue(note.getText() === string);
}

testNoteReadTextMethod("I really don't know what I'm doing");
