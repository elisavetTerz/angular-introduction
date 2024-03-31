import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Christodoulos';

  person0: Person = {
    givenName: 'Elisavet',
    surName: 'Terz',
    age: 0x37,
    email: 'savet@aueb.gr',
    address: 'Athens, Greece',
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA',
  };
}