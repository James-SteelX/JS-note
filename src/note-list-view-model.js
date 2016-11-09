(function(exports) {

  function NoteListView(list){
    this.list = list;
  }

  NoteListView.prototype.getHTML = function () {
    var arrayLength = this.list.notes.length;
    if(arrayLength === 0) {
      var htmlOutput = ""
    } else {
    var htmlOutput = "<ul>"
    for (var i = 0; i < arrayLength; i++) {
      htmlOutput += "<li><div>" + '<a href="#notes/' + this.list.notes[i].id + '">' + this.list.notes[i].getText().substr(0, 20) + "</a></div></li>"
    };
    htmlOutput += "</ul>"
  }
  return htmlOutput;
 };

 exports.NoteListView = NoteListView;

})(this);
