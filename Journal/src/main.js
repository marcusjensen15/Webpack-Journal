//Front-end logic--

import { JournalEntry } from './scripts.js';
import { MyJournal } from './scripts.js';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

  });
});
var myJournal = new MyJournal();


var entry = new JournalEntry("something","blah blah blah");

console.log(entry);
console.log("hi");
