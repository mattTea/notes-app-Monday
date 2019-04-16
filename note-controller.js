(function(exports) {
  function NoteController(list = new NoteList) {
    this.noteList = list; //note list
    this.noteList.addNote("Favourite drink: tea"); //adds note
    this.noteList.addNote("Favourite food: sushi"); //adds note
    this.noteListView = new NoteListView(this.noteList.showList()); //note list view
  }

  NoteController.prototype.insertHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.outputHtml(); //html from note list view
  };

  // var controller = new NoteController(new NoteList());
  // controller.insertHtml();

  exports.NoteController = NoteController
})(this);

// testThingIsNoteControllerObject()
// testThingTakesNoteListAsParameter()
// testConstructorAddsNote()
// testConstructorCreatesNoteListView()
// does something with insertHtml()
