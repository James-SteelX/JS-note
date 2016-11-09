(function(exports) {

  var idTracker = 0

    function Note(string) {
      this.text = string;
      this.id = idTracker++
    }

    Note.prototype.getText = function () {
      return this.text;
    };

    exports.Note = Note;
})(this);
