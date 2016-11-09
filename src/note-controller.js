(function(exports) {

    function NoteController(noteList) {
      this.noteList = noteList;
      this.noteListView = new NoteListView(noteList);
    }

    NoteController.prototype.generateHTML = function () {
      return this.noteListView.getHTML();
    };

    NoteController.prototype.renderList = function () {
      var list = this.generateHTML();
      document.getElementById("app").innerHTML = list;
    };

    NoteController.prototype.changeNote = function() {
      window.addEventListener("hashchange", this.showNoteOnPage());
    };

    NoteController.prototype.showNoteOnPage = function() {
      var s = this.getNoteFromUrl(window.location);
      this.showNote(s);
    };

   NoteController.prototype.getNoteFromUrl = function(location) {
      var urlID = location.hash.split("#notes/")[1];
      console.log(urlID)
      return this.noteListView.list.getNoteText(urlID);
    };


    NoteController.prototype.showNote = function(note) {
      document
        .getElementById("note")
        .innerHTML = note;
    };

    exports.NoteController = NoteController;

})(this);
