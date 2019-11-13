//Business Logic

export function JournalEntry(title,entry){

  this.title = title;
  this.entry = entry;

}

export function MyJournal(){

  this.entries = [];

}

 MyJournal.prototype.addEntry = function(entry){

  this.entries.push(entry);
}
