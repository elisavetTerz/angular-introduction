import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name: string = 'Elisavet';
  name = 'Elisavet';

  person = {
    givenName: 'Elis',
    surName: 'Terz',
    age: 0x37,
    email: 'savet@aueb.gr',
  };

}
