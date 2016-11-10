(function(exports) {

    function NoteController(noteList) {
      this.noteList = noteList;
      this.noteListView = new NoteListView(noteList);
    }

    interceptFromSubmit();

     function interceptFromSubmit() {
      window.addEventListener("submit", function(clickEvent) {
        clickEvent.preventDefault();
        console.log(clickEvent)
      });
     }

    changeNote();

    function changeNote() {
      window.addEventListener("hashchange", showNoteOnPage);
    };

    function showNoteOnPage() {
      showNote(getNoteIdFromUrl(window.location));
    };

   function getNoteIdFromUrl(location) {
      return location.hash.split("#notes/")[1];
    };

    function showNote(note_id) {
      var note = this.noteList.findNoteById(parseInt(note_id));
      var singleNoteView = new SingleNote(note);
      document.getElementById("note").innerHTML = singleNoteView.getSingleHTML();
    }

    NoteController.prototype.generateHTML = function () {
      return this.noteListView.getHTML();
    };

    NoteController.prototype.renderList = function () {
      var list = this.generateHTML();
      document.getElementById("app").innerHTML = list;
    };

    exports.NoteController = NoteController;

})(this);
