(function(exports) {

    function NoteController(noteList) {
      this.noteList = noteList;
      this.noteListView = new NoteListView(this.noteList);
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
