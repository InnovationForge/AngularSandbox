import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };

  addNote() {
    if (this.newNote.title.trim() && this.newNote.content.trim()) {
      this.notes.push(this.newNote);
      this.newNote = { title: '', content: '' };
    }
  }

  removeNote(note: Note) {
    this.notes = this.notes.filter(n => n !== note);
  }
}

interface Note {
  title: string;
  content: string;
}
