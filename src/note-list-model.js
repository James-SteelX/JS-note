(function(exports) {

  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.getNoteText = function (index) {
    return this.notes[index].getText();
  };

  NoteList.prototype.getAllNotes = function () {
    return this.notes;
  };

  NoteList.prototype.createNote = function (string) {
    note = new Note(string);
    this.addNote(note);
  };

  NoteList.prototype.findNoteById = function(id) {
    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        return this.notes[i]
      }
    }
  }

  exports.NoteList = NoteList;

})(this);
