import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
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
