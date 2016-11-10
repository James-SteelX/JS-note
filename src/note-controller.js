(function(exports) {

    function NoteController(noteList) {
      this.noteList = noteList;
      this.noteListView = new NoteListView(this.noteList);
    }

    changeNote();

    function changeNote() {
      window.addEventListener("hashchange", showNoteOnPage);
    };

    function showNoteOnPage() {
      showNote(getNoteFromUrl(window.location));
    };

    function getNoteFromUrl(location) {
      var urlID = location.hash.split("#notes/")[1];
      return this.noteListView.list.notes[urlID].getText();
    };

    function showNote(note) {
      document
        .getElementById("note")
        .innerHTML = note;
    };

    NoteController.prototype.generateHTML = function () {
      return this.noteListView.getHTML();
    };

    NoteController.prototype.renderList = function () {
      var list = this.generateHTML();
      document.getElementById("app").innerHTML = list;
    };

    exports.NoteController = NoteController;

})(this);
