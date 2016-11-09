(function(exports) {

    function NoteController(noteList) {
      this.noteList = noteList;
      this.noteListView = new NoteListView(this.noteList);
    }

    NoteController.prototype.testFunction = function(wlocation) {
      console.log("told you I was a function");
      // var urlID = wlocation.hash.split("#notes/")[1];
      // return this.noteListView.list.notes[urlID].getText();
    };

    NoteController.prototype.generateHTML = function () {
      return this.noteListView.getHTML();
    };

    NoteController.prototype.renderList = function () {
      var list = this.generateHTML();
      document.getElementById("app").innerHTML = list;
    };

    NoteController.prototype.changeNote = function() {
      window.addEventListener("hashchange", this.showNoteOnPage);
    };

    NoteController.prototype.showNoteOnPage = function() {
      var loc = window.location;
      var s = this.testFunction(loc);
      this.showNote(s);
    };

    NoteController.prototype.showNote = function(note) {
      document
        .getElementById("note")
        .innerHTML = note;
    };


    exports.NoteController = NoteController;

})(this);
