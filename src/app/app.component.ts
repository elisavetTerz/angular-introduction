import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Christodoulos';

  person = {
    givenName: 'Elisavet',
    surName: 'Terz',
    age: 0x37,
    email: 'savet@aueb.gr',
  };
}